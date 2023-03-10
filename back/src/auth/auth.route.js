const express = require('express')
const router = express.Router()
const { authController } = require('./auth.modules')

router.post('/',(req,res,next)=>authController.postLogin(req,res,next))

module.exports = router