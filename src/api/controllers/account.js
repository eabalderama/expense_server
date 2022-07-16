const mongoose = require('mongoose')
const Account = require ('../models/Account')
const jwt = require('jsonwebtoken')

module.exports = {
  getEntry: async (req, res) => {
    const { user_id } = req.user;
    if(user_id){
      const accounts = await Account.find({'user': user_id}).populate('user')
      if(accounts.length > 0){
        res.json({
          message: "Successfully fetched accounts",
          length: accounts.length,
          data: accounts
        })
      }else{
        res.json({
          message: "No accounts found"
        })
      }
    }
  },

  getEntryByUserId: async (req, res) => {
    const { user_id } = req.body;
    if(user_id){
      const accounts = await Account.find({'user': user_id}).populate('user')
      if(accounts.length > 0){
        res.json({
          message: "Successfully fetched accounts",
          length: accounts.length,
          data: accounts
        })
      }else{
        res.json({
          message: "No accounts found"
        })
      }
    }
  },

  getEntryById: async (req, res) => {
    const { id } = req.body;
    if(id){
      const account = await Account.findOne({'_id': id}).populate('user')
      if(account.length){
        res.json({
          message: "Successfully fetched accounts",
          data: account
        })
      }else{
        res.json({
          message: "No accounts found"
        })
      }
    }
  },

  getAllEntries: async (req, res) => {
    const accounts = await Account.find().populate('user')
      if(accounts.length > 0){
        res.json({
          message: "Successfully fetched accounts",
          length: accounts.length,
          data: accounts
        })
      }else{
        res.json({
          message: "No accounts found"
        })
      }
  },

  addEntry: async (req, res) => {
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
      res.status(200).json({
        message: 'Successfully added account',
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