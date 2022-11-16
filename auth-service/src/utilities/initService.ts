import { Express } from 'express'
import initDatabaseConnection from './databaseConnection'

const initService = async (app: Express) => {
  const host = process.env.HOST || 'localhost'
  const port = process.env.PORT || 3000
  const connectionString = process.env.DB_CONNECTION_STRING || ''

  await initDatabaseConnection(connectionString)
  app.listen(port, () => {
    console.log(`Application listening on ${host}:${port}`)
  })
}

export default initService
