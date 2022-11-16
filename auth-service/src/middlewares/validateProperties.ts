import { Request, Response, NextFunction } from 'express'
import { body, cookie, validationResult } from 'express-validator'

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

const jwtCookieValidator = [cookie('jwt').exists().bail()]

const validateLoginProperties: any = [
  usernameBodyValidator,
  passwordValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

const validateLogoutProperties: any = [
  jwtCookieValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

const validateRefreshTokenProperties: any = [
  jwtCookieValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

export {
  sendValidationErrors,
  validateLoginProperties,
  validateLogoutProperties,
  validateRefreshTokenProperties
}
