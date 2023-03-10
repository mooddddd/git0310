const express = require('express')
const router = express.Router()
const auth = require('../src/auth/auth.route')
const user = require("../src/user/user.route")


router.use('/auths',auth)
router.use('/users',user)



module.exports = router