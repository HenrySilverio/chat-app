const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const User = mongoose.model(
    'User',
    new Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        validate: isEmail,
      },
      password: {
        type: String,
        required: true,
      },
      newMessages: {
          type: Object,
          default: {},
      },
      status: {
        type: String,
        default: 'online'
      }
    }, {timestamps: true}),
  )
  
  module.exports = User