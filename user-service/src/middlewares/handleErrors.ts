import { Request, Response, NextFunction } from 'express'
import { sendErrorResponse } from '../utilities/errors'

export const handleErrors = (
  err: Error | any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (err.message) {
    case 'ValidationFailed':
      sendErrorResponse(res, 400, 'ValidationFailed', err.properties)
      break
    case 'UserAlreadyExists':
      sendErrorResponse(res, 400, 'UserAlreadyExists')
      break
    case 'UserNotFound':
      sendErrorResponse(res, 400, 'UserNotFound')
      break
    case 'UnableToUpdateUser':
      sendErrorResponse(res, 400, 'UnableToUpdateUser')
      break
    default:
      sendErrorResponse(res, 500, 'InternalServerError')
      break
  }
  next(err.message)
}
