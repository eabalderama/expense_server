const e = require('express')
const express = require('express')
const router = express.Router()
const ExpenseAction = require('../controllers/expense')
const { checkAuth } = require('../../middlewares')

// List all expense
router.get('/', checkAuth,  ExpenseAction.getAllExpense)
// List expense by id
router.get('/:expense_id', checkAuth,  ExpenseAction.getExpenseById)
// List expense by user_id
router.get('/user/:user_id', checkAuth, ExpenseAction.getExpenseByUserId)
// List expense by account_id
router.get('/account/:account_id', checkAuth, ExpenseAction.getExpenseByAccountId)
// List expense by category_id
router.get('/category/:category_id', checkAuth, ExpenseAction.getExpenseByCategoryId)
// Add expense
router.post('/', checkAuth,  ExpenseAction.addExpense)
// Update expense
router.patch('/:id', checkAuth,  ExpenseAction.updateEntry)
// Delete expense
router.delete('/:id', checkAuth,  ExpenseAction.deleteEntry)

module.exports = router