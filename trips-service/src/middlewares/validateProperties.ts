import { Request, Response, NextFunction } from 'express'
import { body, param, validationResult } from 'express-validator'
import VenueModel from '../models/venue'
import TripModel from '../models/trip'

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

const venueNameBodyValidator = [
  body('venueName')
    .exists()
    .bail()
    .isAlphanumeric()
    .bail()
    .trim()
    .bail()
    .escape()
    .bail()
    .custom(value => {
      const venueName = new RegExp('^' + value + '$')
      return VenueModel.findOne({ venueName }).then(venue => {
        if (venue) {
          throw new Error('VenueAlreadyExists')
        }
      })
    })
    .bail()
]
const venueNameParamsValidator = [
  param('venueName')
    .exists()
    .bail()
    .isAlphanumeric()
    .bail()
    .trim()
    .bail()
    .escape()
    .bail()
    .custom(value => {
      const venueName = new RegExp('^' + value + '$')
      return VenueModel.findOne({ venueName }).then(venue => {
        if (!venue) {
          throw new Error('VenueNotFound')
        }
      })
    })
    .bail()
]

const longitudeValidator = [
  body('longitude')
    .exists()
    .bail()
    .isAlphanumeric()
    .bail()
    .trim()
    .bail()
    .escape()
    .bail()
]

const latitudeValidator = [
  body('latitude')
    .exists()
    .bail()
    .isAlphanumeric()
    .bail()
    .trim()
    .bail()
    .escape()
    .bail()
]

const fishTypesValidator = [
  body('fishTypes').exists().bail().trim().bail().escape().bail()
]

const validateCreateVenueProperties: any = [
  venueNameBodyValidator,
  longitudeValidator,
  latitudeValidator,
  fishTypesValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

const validateVenueDetailsProperties: any = [
  venueNameParamsValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

const validateUpdateVenueProperties: any = [
  venueNameParamsValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

const validateCreateTripProperties: any = [
  // venueNameBodyValidator,
  // longitudeValidator,
  // latitudeValidator,
  // fishTypesValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

const validateTripDetailsProperties: any = [
  // venueNameParamsValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

const validateUpdateTripProperties: any = [
  // venueNameParamsValidator,
  (_req: Request, _res: Response, next: NextFunction) => next()
]

export {
  sendValidationErrors,
  validateCreateVenueProperties,
  validateVenueDetailsProperties,
  validateUpdateVenueProperties,
  validateCreateTripProperties,
  validateTripDetailsProperties,
  validateUpdateTripProperties
}
