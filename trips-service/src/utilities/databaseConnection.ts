import mongoose, { ConnectOptions } from 'mongoose'

const initDatabaseConnection = async (connectionString: string) => {
  try {
    const connectionEstablished = await mongoose.connect(connectionString, {
      useNewUrlParser: true
    } as ConnectOptions)

    if (connectionEstablished) {
      console.log('Database connection successfully established.')
    }
  } catch (error) {
    console.error(error)
  }
}

export default initDatabaseConnection
