import { Response } from 'express'
import {
  AuthServiceErrorCodes,
  ErrorResponseProperties
} from './errorDefinitions'

const authServiceErrorCodes: AuthServiceErrorCodes = {
  ValidationFailed: 'Properties validation failed!',
  UserNotFound: 'User not found!',
  IncorrectPassword: 'Incorrect password!',
  InternalServerError: 'Internal server error!',
  Unauthorized: 'Unauthorized',
  Forbidden: 'Forbidden'
}

const sendErrorResponse = (
  res: Response,
  statusCode: number,
  errorMessageKey: string,
  properties?: ErrorResponseProperties[]
) => {
  res.status(statusCode).send({
    logged_in: false,
    error: authServiceErrorCodes[errorMessageKey],
    properties
  })
}

export { authServiceErrorCodes, sendErrorResponse }
