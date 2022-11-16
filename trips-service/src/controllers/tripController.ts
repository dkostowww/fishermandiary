import 'express-async-errors'
import express, { Request, Response } from 'express'
import TripModel from '../models/trip'
import {
  sendValidationErrors,
  validateCreateTripProperties,
  validateTripDetailsProperties,
  validateUpdateTripProperties
} from '../middlewares/validateProperties'

const router = express.Router()

router.post(
  '/',
  [validateCreateTripProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    try {
      const requestData = req.body
      const trip = new TripModel(requestData)
      await trip.save()

      return res.status(201).send({ success: `New trip created!` })
    } catch (err) {
      throw new Error('InternalServerError')
    }
  }
)

router.get('/', async (_req: Request, res: Response) => {
  const foundTrips = await TripModel.find(
    { public: true},
    {
      longitude: 0,
      latitude: 0,
      fishTypes: 0,
      public: 0,
      __v: 0
    }
  )

  res.status(200).send({ trips: foundTrips })
})

router.get(
  '/:tripId([a-zA-Z0-9]+)',
  [validateTripDetailsProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const foundTrip = await TripModel.findOne({ _id: req.params.tripId })

    if (!foundTrip) {
      throw new Error('TripNotFound')
    }
    res.status(200).send({ trip: foundTrip })
  }
)

router.patch(
  '/:tripId([a-zA-Z0-9]+)',
  [validateUpdateTripProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const tripUpdated = await TripModel.findOneAndUpdate(
      { _id: req.params.tripId },
      req.body
    )

    if (!tripUpdated) {
      throw new Error('UnableToUpdateTrip')
    }

    res.status(200).send({ success: true })
  }
)

router.delete(
  '/:tripId([a-zA-Z0-9]+)',
  [validateTripDetailsProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const tripDeleted = await TripModel.deleteOne({ _id: req.params.tripId })

    if (!tripDeleted) {
      throw new Error('UnableToDeleteTrip')
    }

    res.status(200).send({ success: true })
  }
)

export default { router }
