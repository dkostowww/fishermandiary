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
    case 'VenueAlreadyExists':
      sendErrorResponse(res, 400, 'VenueAlreadyExists')
      break
    case 'VenueNotFound':
      sendErrorResponse(res, 400, 'VenueNotFound')
      break
    case 'UnableToUpdateUser':
      sendErrorResponse(res, 400, 'UnableToUpdateUser')
      break
    case 'TripNotFound':
      sendErrorResponse(res, 400, 'TripNotFound')
      break
    case 'UnableToDeleteTrip':
      sendErrorResponse(res, 400, 'TripNotFound')
      break
    case 'UnableToUpdateTrip':
      sendErrorResponse(res, 400, 'TripNotFound')
      break
    default:
      sendErrorResponse(res, 500, 'InternalServerError')
      break
  }
  next(err.message)
}
