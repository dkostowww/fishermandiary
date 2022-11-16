import { Request, Response, NextFunction } from 'express'
import { body, param, validationResult } from 'express-validator'
import UserModel from '../models/user'

const sendValidationErrors = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    throw { message: 'ValidationFailed', properties: errors.array() }
  }

  next()
}

const usernameBodyValidator = [
  body('username')
    .exists()
    .bail()
    .isAlphanumeric()
    .bail()
    .isLength({ min: 2, max: 20 })
    .bail()
    .trim()
    .bail()
    .escape()
    .bail()
    .custom(value => {
      const username = new RegExp('^' + value + '$')
      return UserModel.findOne({ username }).then(user => {
        if (user) {
          throw new Error('UserAlreadyExists')
        }
      })
    })
    .bail()
]
const usernameParamsValidator = [
  param('username')
    .exists()
    .bail()
    .isAlphanumeric()
    .bail()
    .isLength({ min: 2, max: 20 })
    .bail()
    .trim()
    .bail()
    .escape()
    .bail()
    .custom(value => {
      const username = new RegExp('^' + value + '$')
      return UserModel.findOne({ username }).then(user => {
        if (!user) {
          throw new Error('UserNotFound')
        }
      })
    })
    .bail()
]

const emailValidator = [
  body('email')
    .exists()
    .bail()
    .isLength({ min: 6, max: 255 })
    .bail()
    .isEmail()
    .bail()
    .normalizeEmail()
    .bail()
    .escape()
    .bail()
    .trim()
    .bail()
    .custom(value => {
      const email = new RegExp('^' + value + '$')
      return UserModel.findOne({ email }).then(user => {
        if (user) {
          throw new Error('UserAlreadyExists')
        }
      })
    })
    .bail()
]

const passwordValidator = [
  body('password')
    .exists()
    .bail()
    .isAlphanumeric()
    .bail()
    .isLength({ min: 6, max: 255 })
    .bail()
    .trim()
    .bail()
    .escape()
    .bail()
]

const firstNameValidator = [
  body('firstName')
    .exists()
    .bail()
    .isAlphanumeric()
    .bail()
    .isLength({ min: 2, max: 20 })
    .bail()
    .trim()
    .bail()
    .escape()
    .bail()
]

const lastNameValidator = [
  body('lastName')
    .exists()
    .bail()
    .isAlphanumeric()
    .bail()
    .isLength({ min: 2, max: 20 })
    .bail()
    .trim()
    .bail()
    .escape()
    .bail()
]

const validateRegisterUserProperties: any = [
  usernameBodyValidator,
  emailValidator,
  passwordValidator,
  firstNameValidator,
  lastNameValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

const validateUserDetailsProperties: any = [
  usernameParamsValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

const validateUpdatePasswordProperties: any = [
  usernameParamsValidator,
  passwordValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

export {
  sendValidationErrors,
  validateRegisterUserProperties,
  validateUserDetailsProperties,
  validateUpdatePasswordProperties
}
