import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 2,
    max: 20
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 20
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 20
  },
  phone: {
    type: String,
    max: 20
  },
  age: {
    type: Number
  },
  gender: {
    type: String,
    max: 10
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default model('User', userSchema)
