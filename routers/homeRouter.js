let express = require('express')
let router = express.Router()

const homeController = require ('../controllers/homeController')

router.get('/', homeController.renderHome)

module.exports = router