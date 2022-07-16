const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true},
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)