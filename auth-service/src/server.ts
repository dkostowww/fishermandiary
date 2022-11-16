import express from 'express'
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'
import authController from './controllers/authController'
import { handleErrors } from './middlewares/handleErrors'
import initService from './utilities/initService'

dotenv.config({ path: process.cwd() + '/src/.env' })

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api', authController.router)
app.use(handleErrors)

initService(app)
