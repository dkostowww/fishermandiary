import { Response } from 'express'
import {
  UserServiceErrorCodes,
  ErrorResponseProperties
} from './errorDefinitions'

const userServiceErrorCodes: UserServiceErrorCodes = {
  InternalServerError: 'Internal server error!',
  UserAlreadyExists: 'User already exists!',
  ValidationFailed: 'Properties validation failed!',
  UserNotFound: 'User not found!',
  UnableToUpdateUser: 'Unable to update user.'
}

const sendErrorResponse = (
  res: Response,
  statusCode: number,
  errorMessageKey: string,
  properties?: ErrorResponseProperties[]
) => {
  res
    .status(statusCode)
    .send({ error: userServiceErrorCodes[errorMessageKey], properties })
}

export { userServiceErrorCodes, sendErrorResponse }
