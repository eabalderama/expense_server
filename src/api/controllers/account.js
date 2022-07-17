const mongoose = require('mongoose')
const Account = require ('../models/Account')
const jwt = require('jsonwebtoken')

module.exports = {
  getAccount: async (req, res) => {
    const { id } = req.params;
    if(id){
      const account = await Account.findOne({'_id': id}).populate('user')
      if(account){
        res.json({
          status: true,
          message: "Successfully fetched account",
          data: account
        })
      }else{
        res.json({
          status: false,
          message: "No account found"
        })
      }
    }
  },

  getAccountsByUserId: async (req, res) => {
    const { user_id } = req.params;
    if(user_id){
      const accounts = await Account.find({'user': user_id}).populate('user')
      if(accounts.length > 0){
        res.json({
          status: true,
          message: "Successfully fetched accounts",
          length: accounts.length,
          data: accounts
        })
      }else{
        res.json({
          status: false,
          message: "No accounts found"
        })
      }
    }
  },

  getAllAccounts: async (req, res) => {
    const accounts = await Account.find().populate('user')
      if(accounts.length > 0){
        res.json({
          status: true,
          message: "Successfully fetched accounts",
          length: accounts.length,
          data: accounts
        })
      }else{
        res.json({
          status: false,
          message: "No accounts found"
        })
      }
  },

  addAccount: async (req, res) => {
    const {account_name, current_balance, maintain} = req.body
    const { user_id } = req.user
    const account = new Account({
      _id: new mongoose.Types.ObjectId(),
      user: user_id,
      account_name,
      current_balance,
      maintain
    })
    const saved = await account.save()
    if(saved){
      res.json({
        status: true,
        message: 'Successfully added account',
        data: saved
      })
    }else{
      res.json({
        status: false,
        message: 'Failed to add entry'
      })
    }
  },

  updateAccount: async (req, res) => {
    res.json({
      message: "Update Entry"
    })
  },

  deleteAccount: async (req, res) => {
    res.json({
      message: "Delete Entry"
    })
  }
}