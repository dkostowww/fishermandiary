import mongoose from 'mongoose'

const { Schema, model } = mongoose

const venueSchema = new Schema({
  venueName: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  fishTypes: {
    type: Array,
    required: true,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default model('Venue', venueSchema)
