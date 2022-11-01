let express = require('express')
let router = express.Router()

const cartController = require ('../controllers/cartController')

router.get('/cart', cartController.renderCart)

module.exports = router