const e = require('express')
const express = require('express')
const router = express.Router()
const AccountAction = require('../controllers/account')
const { checkAuth } = require('../../middlewares')

// List accounts of authenticated user
router.get('/', checkAuth,  AccountAction.getEntry)
// List all accounts
router.get('/all', checkAuth,  AccountAction.getAllEntries)
// Add account
router.post('/add', checkAuth,  AccountAction.addEntry)
// Update account
router.patch('/update/{id}', checkAuth,  AccountAction.updateEntry)
// Delete account
router.delete('/delete/{id}', checkAuth,  AccountAction.deleteEntry)

module.exports = router