let express = require('express')
let router = express.Router()

const productController = require ('../../src/controllers/productController')

router.get('/', productController.renderProduct)

/*** TODAS LOS PRODUCTOS ***/ 
/***router.get('/', productController.index); 

/*** CREAR UN PRODUCTO ***/ 
/***router.get('/create/', productsController.create); 
router.post('/', productsController.store); 


/*** ACTUALIZAR UN PRODUCTO ***/ 
/***router.get('/:id/', productsController.detail); 

/*** EDITAR UN PRODUCTO ***/ 
/***router.get('/:id/edit', productsController.edit); 
router.put('/:id', productsController.update); 


/*** ELIMINAR UN PRODUCTO
router.delete('/:id', productsController.destroy); ***/ 

module.exports = router