const express = require('express')
const router = express.Router()
const { userController } = require('./user.modules')

// router.post('/',()=>console.log(userController))
router.post('/', (req,res,next)=>userController.postSignup(req,res,next))

module.exports = router