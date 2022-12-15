let express = require('express')
let router = express.Router()
const path = require('path');

//Requiero expres-validator
const { body } = require('express-validator');

//Requiero el paquete para comparar las contraseñas  que tengo hash
const bcrypt = require('bcryptjs');

//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

const userController = require ('../controllers/userController')

//Configuracion de multer
const storage = multer.diskStorage({
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


//Requiero la variable que contiene la validacion 
const validationRegistro = require('../middlewares/validateRegisterMiddleware')

//RUTAS

router.get('/login', userController.login);

router.post('/login', validationRegistro, userController.processRegister);

router.get('/registro', userController.register);

//Aqui en esta ruta envio al controlador el avatar del usuario así como las respectivas validaciones

//router.post('/registro', upload.single('avatar'),validacionesRegistro, controllersUser.create);





