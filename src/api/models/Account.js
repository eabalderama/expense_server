const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  account_name: { type: String, required: true },
  current_balance: { type: Number, required: true },
  maintain: { type: Number }
},{
  timestamps: true
})

module.exports = mongoose.model('Account', AccountSchema)