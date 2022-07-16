const e = require('express')
const express = require('express')
const router = express.Router()
const UserAction = require('../controllers/user')
const { checkAuth } = require('../../middlewares')

// List Users
router.get('/', checkAuth,  UserAction.getAllUsers)
// Signup
router.post('/signup', UserAction.signup)
// Login
router.post('/login', UserAction.login)

module.exports = router