let express = require('express')
let router = express.Router()

const homeController = require ('../../src/controllers/homeController')

router.get('/', homeController.index); 
//router.get('/search', homeController.search); 

module.exports = router;
