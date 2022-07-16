const mongoose = require('mongoose')

module.exports = {
  getEntry: async (req, res) => {
    res.json({
      message: "Get Entry"
    })
  },
  addEntry: async (req, res) => {
    res.json({
      message: "Add Entry"
    })
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