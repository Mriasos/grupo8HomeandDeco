let express = require('express')
const { restart } = require('nodemon')
let router = express.Router()
const path = require('path');

const adminController = require ('../controllers/adminControllers')

router.get('/createProduct', adminController.createProduct)

module.exports = router