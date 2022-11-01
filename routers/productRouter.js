let express = require('express')
let router = express.Router()

const productController = require ('../controllers/productController')

router.get('/product', productController.renderProduct)

module.exports = router