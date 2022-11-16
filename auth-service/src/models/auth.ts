import mongoose from 'mongoose'

const { Schema, model } = mongoose

const authSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  refreshToken: {
    type: String,
    max: 512
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

authSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 })

export default model('Auth', authSchema)
