import express from 'express'
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'
import tripController from './controllers/tripController'
import venueController from './controllers/venueController'
import initService from './utilities/initService'
import { handleErrors } from './middlewares/handleErrors'

dotenv.config({ path: process.cwd() + '/src/.env' })

const app = express()

app.use(function (_req, res, next) {
    res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        )
    next()
})

app.use(express.json())
app.use(cookieParser())
app.use('/api/trip', tripController.router)
app.use('/api/venue', venueController.router)
app.use(handleErrors)

initService(app)
