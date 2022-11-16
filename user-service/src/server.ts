import express from 'express'
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'
import userController from './controllers/userController'
import initService from './utilities/initService'
import { handleErrors } from './middlewares/handleErrors'
import 'source-map-support/register'

dotenv.config({ path: process.cwd() + '/src/.env' })

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/user', userController.router)
app.use(handleErrors)

initService(app)
