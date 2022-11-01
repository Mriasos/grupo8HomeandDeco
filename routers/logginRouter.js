let express = require('express')
let router = express.Router()

const logginController = require ('../controllers/logginController')

router.get('/loggin', logginController.renderLoggin)

module.exports = router