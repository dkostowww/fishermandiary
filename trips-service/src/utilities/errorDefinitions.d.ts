export interface TripsServiceErrorCodes {
  InternalServerError: string
  ValidationFailed: string
  VenueAlreadyExists: string
  UnableToDeleteVenue: string
  VenueNotFound: string
  UnableToUpdateVenue: string
  UnableToDeleteTrip: string
  TripNotFound: string
  UnableToUpdateTrip: string
}

export interface ErrorResponseProperties {
  value?: string
  msg: string
  param: string
  location: string
}
