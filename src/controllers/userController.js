const path = require('path');
const fs = require('fs')
const {validationResult} = require('express-validator')

const User = require('../models/User')

const userFilePath = path.resolve('./src/data/user.json');
const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const userController = {
	login: function(req,res){
        res.render(path.resolve(('src/views/user/login.ejs')));
    },

	// registro de usuario
	register: (req, res) => {
		return res.render(path.resolve('src/views/user/register.ejs'))
	},
	

	// validacion del registro
	processRegister: (req, res) => {
		const resultValidation = validationResult(req)
	
       if(resultValidation.errors.length > 0){
        return res.render((path.resolve('src/views/user/register.ejs')), {
               errors: resultValidation.mapped(),
              oldData: req.body
          });

        }
        
		let userToCreate = {
			...req.body, 
			image: req.file.filename
		}

		User.create(userToCreate);
        return res.send('el usuario de creo con exito!')
		
	},

	
	
};


module.exports= userController