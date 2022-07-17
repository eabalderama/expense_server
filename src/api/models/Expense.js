const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Category'
  },
  account: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'Account'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  details: { type: String, required: true },
  amount: { type: Number , required: true}
}, {
  timestamps: true
})

module.exports = mongoose.model('Expense', ExpenseSchema);