const e = require('express')
const express = require('express')
const router = express.Router()
const CategoryAction = require('../controllers/category')
const { checkAuth } = require('../../middlewares')

// List all category
router.get('/', checkAuth,  CategoryAction.getEntry)
// Get category by id
router.get('/:id', checkAuth,  CategoryAction.getEntryById)
// Add category
router.post('/add', checkAuth,  CategoryAction.addEntry)
// Update category
router.patch('/update/{id}', checkAuth,  CategoryAction.updateEntry)
// Delete category
router.delete('/delete/{id}', checkAuth,  CategoryAction.deleteEntry)

module.exports = router