import 'express-async-errors'
import express, { Request, Response } from 'express'
import VenueModel from '../models/venue'
import {
  sendValidationErrors,
  validateCreateVenueProperties,
  validateVenueDetailsProperties,
  validateUpdateVenueProperties
} from '../middlewares/validateProperties'

const router = express.Router()

router.post(
  '/',
  [validateCreateVenueProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    try {
      const requestData = req.body
      const venue = new VenueModel(requestData)
      await venue.save()

      return res.status(201).send({ success: `New venue created!` })
    } catch (err) {
      throw new Error('InternalServerError')
    }
  }
)

router.get('/', async (_req: Request, res: Response) => {
  const foundVenues = await VenueModel.find({})

  res.status(200).send({ venues: foundVenues })
})

router.get(
  '/:venueName([a-zA-Z]+)',
  [validateVenueDetailsProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const venueName = new RegExp('^' + req.params.venueName + '$')
    const foundVenue = await VenueModel.findOne({ venueName })

    if (!foundVenue) {
      throw new Error('VenueNotFound')
    }
    res.status(200).send({ venue: foundVenue })
  }
)

router.patch(
  '/:venueName([a-zA-Z]+)',
  [validateUpdateVenueProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const venueName = new RegExp('^' + req.params.venueName + '$')
    const venueUpdated = await VenueModel.findOneAndUpdate(
      { venueName },
      req.body
    )

    if (!venueUpdated) {
      throw new Error('UnableToUpdateVenue')
    }

    res.status(200).send({ success: true })
  }
)

router.delete(
  '/:venueName([a-zA-Z]+)',
  [validateVenueDetailsProperties, sendValidationErrors],
  async (req: Request, res: Response) => {
    const venueName = new RegExp('^' + req.params.username + '$')
    const venueDeleted = await VenueModel.deleteOne({ venueName })

    if (!venueDeleted) {
      throw new Error('UnableToDeleteVenue')
    }

    res.status(200).send({ success: true })
  }
)

export default { router }
