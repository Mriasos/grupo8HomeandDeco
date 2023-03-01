let express = require('express')
let router = express.Router()

const productController = require ('../../src/controllers/productController')


/*** MOSTRAR TODOS LOS PRODUCTOS ***/ 
router.get('/', productController.index) 
//router.get('/search', productController.search); 

/*** CREAR UN PRODUCTO ***/ 
router.get('/create/', productController.create); 
router.post('/', productController.store); 


/*** ACTUALIZAR UN PRODUCTO ***/ 
router.get('/detail/:productId/', productController.detail); 

/*** EDITAR UN PRODUCTO ***/ 
router.get('/edit/:productId', productController.edit); 
router.put('/edit/:productId/', productController.update); 

/*** ELIMINAR UN PRODUCTO ***/
router.delete('/product/delete/:productId/', productController.destroy);

module.exports = router