const e = require('express')
const express = require('express')
const router = express.Router()
const ExpenseAction = require('../controllers/expense')
const { checkAuth } = require('../../middlewares')

// List expense by id
router.get('/{id}', checkAuth,  ExpenseAction.getEntry)
// Add expense
router.post('/add', checkAuth,  ExpenseAction.addEntry)
// Update expense
router.patch('/update/{id}', checkAuth,  ExpenseAction.updateEntry)
// Delete expense
router.delete('/delete/{id}', checkAuth,  ExpenseAction.deleteEntry)

module.exports = router