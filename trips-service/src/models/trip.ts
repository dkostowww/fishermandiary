import mongoose from 'mongoose'

const { Schema, model } = mongoose

const tripSchema = new Schema({
  venueName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  },
  tripLength: {
    type: String,
    max: 10
  },
  fishWeight: {
    type: String
  },
  fishTypes: {
    type: Array,
    default: []
  },
  public: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default model('Trip', tripSchema)
