const mongoose = require('mongoose')
const Category = require('../models/Category')

module.exports = {
  getEntry: async (req, res) => {
    const categories = await Category.find()
    if(categories.length > 0){
      res.json({
        message: 'Successfully fetched categories',
        data: categories
      })
    }else{
      res.json({
        message: "No categories found"
      })
    }
    
  },

  getEntryById: async (req, res) => {
    const { id } = req.params
    if(id){
      const category = await Category.findOne({'id': id})
      if(category){
        res.json({
          message: 'Successfully fetched category',
          data: category
        })
      }else{
        res.json({
          message: "Category not found"
        })
      }
    }else{
      res.status(500).json({
        message: 'Failed to fetch category'
      })
    }
    
  },

  addEntry: async (req, res) => {
    const { category_name } = req.body
    const category = new Category({
      _id: new mongoose.Types.ObjectId,
      category_name
    })
    const saved = await category.save()
    if(saved){
      res.json({
        message: 'Successfully added category',
        data: saved
      })
    }else{
      res.status(500).json({
        message: 'Failed to add entry'
      })
    }
  },

  updateEntry: async (req, res) => {
    res.json({
      message: "Update Entry"
    })
  },

  deleteEntry: async (req, res) => {
    res.json({
      message: "Delete Entry"
    })
  }
}