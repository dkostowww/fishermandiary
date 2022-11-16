import { Response } from 'express'
import {
  TripsServiceErrorCodes,
  ErrorResponseProperties
} from './errorDefinitions'

const tripsServiceErrorCodes: TripsServiceErrorCodes = {
  InternalServerError: 'Internal server error!',
  ValidationFailed: 'Properties validation failed!',
  VenueAlreadyExists: 'User already exists!',
  UnableToDeleteVenue: 'Unable to delete venue!',
  VenueNotFound: 'Venue not found!',
  UnableToUpdateVenue: 'Unable to update venue!',
  UnableToDeleteTrip: 'Unable to delete trip!',
  TripNotFound: 'Trip not found!',
  UnableToUpdateTrip: 'Unable to update trip!'
}

const sendErrorResponse = (
  res: Response,
  statusCode: number,
  errorMessageKey: string,
  properties?: ErrorResponseProperties[]
) => {
  res
    .status(statusCode)
    .send({ error: tripsServiceErrorCodes[errorMessageKey], properties })
}

export { tripsServiceErrorCodes, sendErrorResponse }
