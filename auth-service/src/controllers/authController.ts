import 'express-async-errors'
import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'
import jwt, { VerifyErrors } from 'jsonwebtoken'
import AuthModel from '../models/auth'
import * as UserService from '../services/user'
import {
  sendValidationErrors,
  validateLoginProperties,
  validateLogoutProperties,
  validateRefreshTokenProperties
} from '../middlewares/validateProperties'

const router = express.Router()

router.post(
  '/login',
  [validateLoginProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const { username, password } = req.body
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || ''
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || ''
    const foundUser = await UserService.getUserByUsername(username)

    if (!foundUser || foundUser.username !== username) {
      throw new Error('UserNotFound')
    }

    const passwordsMatch = await bcrypt.compare(password, foundUser.password)

    if (passwordsMatch) {
      const accessToken = jwt.sign(
        { username: foundUser.username },
        accessTokenSecret,
        { expiresIn: '15m' }
      )
      const refreshToken = jwt.sign(
        { username: foundUser.username },
        refreshTokenSecret,
        { expiresIn: '1d' }
      )

      await AuthModel.findOneAndUpdate(
        { username },
        { refreshToken },
        { new: true, upsert: true }
      )
      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
      })
      res.json({ accessToken, logged_in: true })
    } else {
      throw new Error('IncorrectPassword')
    }
  }
)

router.get(
  '/logout',
  [validateLogoutProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const cookies = req.cookies
    const refreshToken = cookies.jwt
    const refreshTokenFound = await AuthModel.findOne({ refreshToken })

    if (!refreshTokenFound) {
      res.clearCookie('jwt', { secure: true })
      return res.sendStatus(204)
    }

    await AuthModel.deleteOne({ refreshToken })
    res.clearCookie('jwt', { httpOnly: true, secure: true })
    return res.sendStatus(204)
  }
)

router.get(
  '/refreshToken',
  [validateRefreshTokenProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const cookies = req.cookies
    const refreshToken = cookies.jwt
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || ''
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || ''
    const foundUser = await AuthModel.findOne({ refreshToken })

    if (!foundUser) {
      throw new Error('Forbidden')
    }

    jwt.verify(
      refreshToken,
      refreshTokenSecret,
      (err: VerifyErrors | any, decoded: any) => {
        if (err || foundUser.username !== decoded.username) {
          throw new Error('Forbidden')
        }

        const accessToken = jwt.sign(
          { username: decoded.username },
          accessTokenSecret,
          { expiresIn: '15m' }
        )
        res.json({ accessToken })
      }
    )
  }
)

export default { router }
