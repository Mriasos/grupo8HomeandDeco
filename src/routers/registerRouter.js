let express = require('express')
let router = express.Router()

const registerController = require ('../../../src/controllers/registerController')

router.get('/register', registerController.renderRegister)

module.exports = router