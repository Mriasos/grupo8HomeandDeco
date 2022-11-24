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