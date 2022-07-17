const mongoose = require('mongoose')
const Category = require('../models/Category')

module.exports = {
  getAllCategory: async (req, res) => {
    const categories = await Category.find()
    if(categories.length > 0){
      res.json({
        status: true,
        message: 'Successfully fetched categories',
        length: categories.length,
        data: categories
      })
    }else{
      res.json({
        status: false,
        message: "No categories found"
      })
    }
    
  },

  getCategoryById: async (req, res) => {
    const { category_id } = req.params
    if(id){
      const category = await Category.findOne({'_id': category_id})
      if(category){
        res.json({
          status: true,
          message: 'Successfully fetched category',
          data: category
        })
      }else{
        res.json({
          status: false,
          message: "Category not found"
        })
      }
    }else{
      res.json({
        status: false,
        message: 'Failed to fetch category'
      })
    }
    
  },

  addCategory: async (req, res) => {
    const { category_name } = req.body
    const category = new Category({
      _id: new mongoose.Types.ObjectId,
      category_name
    })
    const saved = await category.save()
    if(saved){
      res.json({
        status: true,
        message: 'Successfully added category',
        data: saved
      })
    }else{
      res.json({
        status: false,
        message: 'Failed to add entry'
      })
    }
  },

  updateCategory: async (req, res) => {
    res.json({
      message: "Update Entry"
    })
  },

  deleteCategory: async (req, res) => {
    res.json({
      message: "Delete Entry"
    })
  }
}