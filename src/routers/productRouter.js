let express = require('express')
let router = express.Router()

const productController = require ('../../src/controllers/productController')

router.get('/', productController.renderProduct)

/*GET- detalle de un producto en particular */ 
router.get('/', productController.index) 
router.get('/search', productController.search); 

/*** CREAR UN PRODUCTO ***/ 
/***router.get('/create/', productsController.create); 
router.post('/', productsController.store); 


/*** ACTUALIZAR UN PRODUCTO ***/ 
/***router.get('/detail/:productId/', productsController.detail); 

/*** EDITAR UN PRODUCTO ***/ 
/***router.get('/edit/:productId/', productsController.edit); 
router.put('/:id', productsController.update); 


/*** ELIMINAR UN PRODUCTO
router.delete('/:id', productsController.destroy); ***/ 

module.exports = router