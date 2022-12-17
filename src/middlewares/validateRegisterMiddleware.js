const path = require('path');
const { body } = require('express-validator');

const validateRegister = [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un email ').bail()
    .isEmail().withMessage('Tienes que escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('fnac').notEmpty().withMessage('Selecciona tu fecha de nacimiento'),
    body('imagenUsuario').custom((value, {req }) =>{
        let file = req.file;
        let accepedExtensions = ['.jpg', '.png', '.gif'];

        if(!file){
            throw new Error('Tienes que subir una imagen');
        }else{
            let fileExtensions = path.extname(file.originalname);
            if(!accepedExtensions.includes(fileExtensions)){
                throw new Error(`Las extensiones de archivos permitidas son ${accepedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]


module.exports = validateRegister