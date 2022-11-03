let express = require('express')
let router = express.Router()

const cartController = require ('../../src/controllers/cartController')

router.get('/cart', cartController.renderCart)

module.exports = router