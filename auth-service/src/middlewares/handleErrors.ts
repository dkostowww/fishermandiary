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
    case 'UserNotFound':
      sendErrorResponse(res, 401, 'UserNotFound')
      break
    case 'IncorrectPassword':
      sendErrorResponse(res, 401, 'IncorrectPassword')
      break
    case 'Unauthorized':
      sendErrorResponse(res, 401, 'Unauthorized')
      break
    case 'Forbidden':
      sendErrorResponse(res, 403, 'Forbidden')
      break
    default:
      sendErrorResponse(res, 500, 'InternalServerError')
      break
  }
  next()
}
