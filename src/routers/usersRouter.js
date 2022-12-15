let express = require('express')
let router = express.Router()

//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

const userController = require ('../../src/controllers/usersController')

//Configuracion de multer
const storage = diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('public/images/users'));    //Carpeta donde se va a guardar la imagen
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        const fileExtension = path.extname(file.originalname)
      cb(null, "imagen" + "-" + uniqueSuffix + fileExtension)     
    }
  })
  
   
const upload= multer({ storage })




/*** MOSTRAR TODOS LOS PRODUCTOS ***/ 
router.get('/', userController.index) 
//router.get('/search', productController.search); 

/*** CREAR UN PRODUCTO ***/ 
router.get('/create/', userController.create); 
router.post('/', upload.single(imagen), userController.store); //Agrego en la ruta que voy a cargar la imagen "upload.single(image)"


/*** ACTUALIZAR UN PRODUCTO ***/ 
router.get('/detail/:productId/', userController.detail); 

/*** EDITAR UN PRODUCTO ***/ 
router.get('/edit/:productId', userController.edit); 
router.put('/:id', userController.update); 


/*** ELIMINAR UN PRODUCTO ***/
router.delete('/:id', userController.destroy);  

module.exports = router