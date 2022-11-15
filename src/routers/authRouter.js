let express = require('express')
let router = express.Router()
const authController = require ('../../src/controllers/authController')


router.get('/register', authController.renderRegister)

router.get('/login', authController.renderLoggin)


module.exports = router