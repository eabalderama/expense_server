const e = require('express')
const express = require('express')
const router = express.Router()
const AccountAction = require('../controllers/account')
const { checkAuth } = require('../../middlewares')

// List all accounts
router.get('/', checkAuth,  AccountAction.getAllAccounts)
// Get account by account id
router.get('/:id', checkAuth,  AccountAction.getAccount)
// Get accounts by user id
router.get('/user/:user_id', checkAuth,  AccountAction.getAccountsByUserId)
// Add account
router.post('/add', checkAuth,  AccountAction.addAccount)
// Update account
router.patch('/update/:id', checkAuth,  AccountAction.updateAccount)
// Delete account
router.delete('/delete/:id', checkAuth,  AccountAction.deleteAccount)

module.exports = router