const mongoose = require('mongoose')
const User = require ('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.find().select('_id email firstname lastname createdAt updatedAt')
    if(users.length > 0){
      res.json({
        status: true,
        message: 'Successfully fetched users',
        data: users
      })
    }else{
      res.json({
        status: false,
        message: 'No users found'
      });
    }
    
  },
  signup: async (req, res) => {
    const {email, password, firstname, lastname } = req.body
    const checkEmail = await User.findOne({email: email})
    if(checkEmail) {
      res.json({
        status: false,
        message: 'Email already exists'
      })
    }else{
      bcrypt.hash(password, 10, async (err, hash) => {
        if(err){
          return res.status(500).json({
            error: err
          })
        }else{
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: email,
            password: hash,
            firstname,
            lastname
          })

          try{
            const savedUser = await user.save();
            if(savedUser){
              res.json({
                status: true,
                message: "User created",
                data: {
                  email,
                  firstname,
                  lastname
                }
              })
            }
            
          }catch(error){
            res.status(500).json({
              status: false,
              error
            })
          }
        }
      })
    }
  },
  login: async (req, res) => {
    const {email, password} = req.body
    try{
      const user = await User.findOne({email: email})
      if(user){
        const checkPassword = await bcrypt.compare(password, user.password)
        if(checkPassword){
          const token = jwt.sign({email: user.email, user_id: user._id}, process.env.JWT_KEY, {expiresIn: '1h'})
          res.json({
            status: true,
            message: 'Login success',
            token:token
          })
        }else{
          res.json({
            status:false,
            message: 'Credentials does not match'
          });
        }
      }else{
        res.json({
          status:false, 
          message: 'Credentials does not match'
        });
      }
    }catch(error){
      req.json({
        status:false,
        error
      })
    }
  }
}