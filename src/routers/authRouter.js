let express = require('express')
let router = express.Router()
const authController = require ('../../src/controllers/authController')

const multer = require('multer')

router.get('/register', authController.renderRegister)

router.get('/login', authController.renderLoggin)


module.exports = router