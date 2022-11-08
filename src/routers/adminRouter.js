let express = require('express')
let router = express.Router()

const adminController = require('../../src/controllers/adminControllers')

router.get('/createProduct', adminController.createProduct)
router.get('/deletteProduct', adminController.deletteProduct)

module.exports = router


