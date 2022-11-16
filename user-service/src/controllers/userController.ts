import 'express-async-errors'
import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'
import UserModel from '../models/user'
import {
  sendValidationErrors,
  validateRegisterUserProperties,
  validateUserDetailsProperties,
  validateUpdatePasswordProperties
} from '../middlewares/validateProperties'

const router = express.Router()

router.post(
  '/register',
  [validateRegisterUserProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      phone,
      age,
      gender
    } = req.body

    try {
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new UserModel({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
        age,
        gender
      })
      await user.save()

      return res.status(201).send({ success: `New user ${email} created!` })
    } catch (err) {
      throw new Error('InternalServerError')
    }
  }
)

router.get(
  '/:username([a-zA-Z0-9]+)',
  [validateUserDetailsProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const username = new RegExp('^' + req.params.username + '$')
    const foundUser = await UserModel.findOne({ username })

    if (!foundUser) {
      throw new Error('UserNotFound')
    }
    res.status(200).send({ user: foundUser })
  }
)

router.patch(
  '/updateDetails/:username([a-zA-Z0-9]+)',
  [validateUserDetailsProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const username = new RegExp('^' + req.params.username + '$')
    const userUpdated = await UserModel.findOneAndUpdate({ username }, req.body)

    if (!userUpdated) {
      throw new Error('UnableToUpdateUser')
    }

    res.status(200).send({ success: true })
  }
)

router.patch(
  '/updatePassword/:username([a-zA-Z0-9]+)',
  [validateUpdatePasswordProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const username = new RegExp('^' + req.params.username + '$')
    const password: string = req.body.password

    const hashedPassword = await bcrypt.hash(password, 10)
    const userUpdated = await UserModel.findOneAndUpdate(
      { username },
      { password: hashedPassword }
    )

    if (!userUpdated) {
      throw new Error('UnableToUpdateUser')
    }

    res.status(200).send({ success: true })
  }
)

export default { router }
