let express = require('express')
let router = express.Router()

const userController = require ('../../src/controllers/usersController')


/*** MOSTRAR TODOS LOS PRODUCTOS ***/ 
router.get('/', userController.index) 
//router.get('/search', productController.search); 

/*** CREAR UN PRODUCTO ***/ 
router.get('/create/', userController.create); 
router.post('/', userController.store); 


/*** ACTUALIZAR UN PRODUCTO ***/ 
router.get('/detail/:productId/', userController.detail); 

/*** EDITAR UN PRODUCTO ***/ 
router.get('/edit/:productId', userController.edit); 
router.put('/:id', userController.update); 


/*** ELIMINAR UN PRODUCTO ***/
router.delete('/:id', userController.destroy);  

module.exports = router