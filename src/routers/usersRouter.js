let express = require('express')
let router = express.Router()
const path = require('path');
const { dirname } = require('path');

//Requiero expres-validator
const { body } = require('express-validator');

//Requiero el paquete para comparar las contraseñas  que tengo hash
const bcrypt = require('bcryptjs');

//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

const userController = require ('../controllers/userController')

//Configuracion de multer
const multerMiddle = require('../middlewares/multerMiddleware')
  



//Requiero la variable que contiene la validacion 
const validationRegistro = require('../middlewares/validateRegisterMiddleware')

router.get('/register', userController.register)

//RUTAS

router.get('/login', userController.login);

router.post('/login', validationRegistro, userController.processRegister);

router.get('/registro', userController.register);

module.exports = router;
//Aqui en esta ruta envio al controlador el avatar del usuario así como las respectivas validaciones

//router.post('/registro', upload.single('avatar'),validacionesRegistro, controllersUser.create);





//este era el codigo del archivo authRouter que fue eliminado
/*
let express = require('express')
let router = express.Router()
const multer = require('multer');
const { dirname } = require('path');
const path = require('path');
const authController = require ('../../src/controllers/authController')

//se indica a Multer donde se guardaran los archivos y con que nombre
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, path.join(--dirname, '../public/imagenes/fotoperfil' ))
    },
    //nombre que se le dara al archivo 
    filename: (req, file, cb) =>{
        const newFilename = 'imagperfil-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename );
    }
});
//ejecucion  
const upload = multer ({storage});

router.get('/register', authController.renderRegister)

//Procesamiento de formulario
router.post('/', upload.single('imagenUsuario'), authController.store)

router.get('/login', authController.renderLoggin)

module.exports = router
*/


