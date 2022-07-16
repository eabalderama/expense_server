const mongoose = require('mongoose')
const User = require ('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  getAllUsers: (req, res) => {
    res.json({
      message: 'API - 👋🌎🌍🌏'
    });
  },
  signup: async (req, res) => {
    const {email, password, firstname, lastname } = req.body
    const checkEmail = await User.findOne({email: email})
    if(checkEmail) {
      res.status(409).json({
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
              res.status(200).json({
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
          res.status(200).json({
            message: 'Login success',
            token:token
          })
        }else{
          res.status(401).json({message: 'Credentials does not match'});
        }
      }else{
        res.status(401).json({message: 'Credentials does not match'});
      }
    }catch(error){
      req.status(500).json({error})
    }
  }
}