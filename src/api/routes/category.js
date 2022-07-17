const e = require('express')
const express = require('express')
const router = express.Router()
const CategoryAction = require('../controllers/category')
const { checkAuth } = require('../../middlewares')

// List all category
router.get('/', checkAuth,  CategoryAction.getAllCategory)
// Get category by id
router.get('/:category_id', checkAuth,  CategoryAction.getCategoryById)
// Add category
router.post('/add', checkAuth,  CategoryAction.addCategory)
// Update category
router.patch('/update/:id', checkAuth,  CategoryAction.updateCategory)
// Delete category
router.delete('/delete/:id', checkAuth,  CategoryAction.deleteCategory)

module.exports = router