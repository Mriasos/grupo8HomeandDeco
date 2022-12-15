const path = require('path');
const { body } = require('express-validator');

const validateRegister = [
    body('fullName').notEmpty().withMessage('Tenés que escribir un nombre'),
    body('email')
    .notEmpty().withMessage('Tenés que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tenés que escribir una contraseña'),
    body('fnac').notEmpty().withMessage('Tienes que poner tu fecha de nacimiento'),
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