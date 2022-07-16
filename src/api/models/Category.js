const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category_name: { type: String, required: true }
},{
  timestamps: true
})

module.exports = mongoose.model('Category', CategorySchema)