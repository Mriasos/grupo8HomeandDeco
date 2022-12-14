const path = require('path');
const fs = require('fs')
const {validationResult} = require('express-validator')

const User = require('../models/User')

//Requiero el paquete para comparar las contraseñas  que tengo hash
const bcrypt = require('bcryptjs');




const userFilePath = path.resolve('./src/data/user.json');
const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const userController = {
	login: function(req,res){
        res.render(path.resolve(('src/views/user/login.ejs')));
    },

	//validacion de login
	processLogin: (req,res) => {
			let userToLogin = User.findByField('email', req.body.email);
			if(userToLogin){
				let contraseñaCorrecta = bcrypt.compareSync(req.body.password, userToLogin.password)
				if(contraseñaCorrecta){
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
					return res.redirect('/users/profile')
				}
				return res.render(path.resolve(('src/views/user/login.ejs')),{
					errors: {
						email:{
							msg: 'Las credenciales son invalidas'
						}
					}
				});
			}
			return res.render(path.resolve(('src/views/user/login.ejs')),{
				errors: {
					email:{
						msg: 'No se encuentra este email'
					}
				}
			});
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

		let userInDb = User.findByField('email', req.body.email)
		if(userInDb) {
			return res.render(path.resolve('src/views/user/register.ejs'),{
				errors: {
					email: {
						msg: "Este email ya esta registrado"
					}
				},
				oldData: req.body
			})
		}

        
		let userToCreate = {
			...req.body, 
			password: bcrypt.hashSync(req.body.password, 10),
			image: req.file.filename
		}

		User.create(userToCreate);
        return res.redirect('/users/login')
		
	},

	//registro de usuario
	profile: (req, res) => {
		return res.render(path.resolve('src/views/user/profile.ejs'))
	},

	
	
};


module.exports= userController