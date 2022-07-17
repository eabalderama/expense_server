const mongoose = require('mongoose')
const Expense = require('../models/Expense.js')
const Category = require('../models/Category')
const Account = require('../models/Account')

module.exports = {
  getAllExpense: async (req, res) => {
    const expenses = await Expense.find()
      .populate('category', 'category_name')
      .populate('user', 'email firstname lastname')
      .populate('account', 'account_name')
    if(expenses.length > 0){
      res.json({
        status: true,
        message: 'Successfully fetched expenses',
        data: expenses
      })
    }else{
      res.json({
        status: false,
        message: "No expenses found"
      })
    }
  },

  getExpenseById: async (req, res) => {
    const { expense_id } = req.params
    const expense = await Expense.findOne({ '_id' : expense_id })
      .populate('category', 'category_name')
      .populate('user', 'email firstname lastname')
      .populate('account', 'account_name')
    if(expense){
      res.json({
        status: true,
        message: 'Successfully fetched expense',
        data: expense
      })
    }else{
      res.json({
        status: false,
        message: 'No expense found'
      })
    }
  },

  getExpenseByAccountId: async (req, res) => {
    const { account_id } = req.params
    const expense = await Expense.findOne({ 'account' : account_id })
      .populate('category', 'category_name')
      .populate('user', 'email firstname lastname')
      .populate('account', 'account_name')
    if(expense){
      res.json({
        status: true,
        message: 'Successfully fetched expense',
        data: expense
      })
    }else{
      res.json({
        status: false,
        message: 'Failed to fetch expense'
      })
    }
  },

  getExpenseByUserId: async (req, res) => {
    const { user_id } = req.params
    const expense = await Expense.findOne({ 'user' : user_id })
      .populate('category', 'category_name')
      .populate('user', 'email firstname lastname')
      .populate('account', 'account_name')
    if(expense){
      res.json({
        status: true,
        message: 'Successfully fetched expense',
        data: expense
      })
    }else{
      res.json({
        status: false,
        message: 'Failed to fetch expense'
      })
    }
  },

  getExpenseByCategoryId: async (req, res) => {
    const { category_id } = req.params
    const expense = await Expense.findOne({ 'category' : category_id })
      .populate('category', 'category_name')
      .populate('user', 'email firstname lastname')
      .populate('account', 'account_name')
    if(expense){
      res.json({
        status: true,
        message: 'Successfully fetched expense',
        data: expense
      })
    }else{
      res.json({
        status: false,
        message: 'Failed to fetch expense'
      })
    }
  },

  addExpense: async (req, res) => {
    const { category_id, account_id, details, amount } = req.body
    const { user_id } = req.user 
    const category = await Category.findOne({ '_id' : category_id})
    if(!category){
      return res.json({
        status: false,
        message: 'Category does not exist'
      })
    }
    const account = await Account.findOne({ '_id' : account_id })
    if(!account){
      return res.json({
        status: false,
        message: 'Account does not exist'
      })
    }
    const expense = new Expense({
      _id: new mongoose.Types.ObjectId(),
      category: category._id,
      account: account._id,
      user: user_id,
      details,
      amount
    })
    
    const saved = expense.save()
    if(saved){
      res.json({
        status: true,
        message: 'Expense successfully added',
        data: saved
      })
    }else{
      res.json({
        status: false,
        message: 'Failed to add expense'
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