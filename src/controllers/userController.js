const path = require('path');
const fs = require('fs')
const {validationResult} = require('express-validator')



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
		return res.send({
			body: req.body,
			file: req.file
		})
		//const resultValidation = validationResult(req);
       // if(resultValidation.errors.length > 0){
        //    return res.render((path.resolve('src/views/user/register.ejs')), {
         //       errors: resultValidation.mapped(),
          //      oldData: req.body
          //  });

     //   }
        
		//user.create(req.body);
        //return res.render("El usuario se creo con exito!")
		// let errors = validationResult(req)
		//if(errors.isEmpty()){
		//	let user = req.body
		//	userId = usersModel.create(user)

		//	res.redirect('/users/' + userId)
		//}	

		//else{
		//	res.render('users/create' , {errors: errors.mapped(), old: req.body})
		//}



		
	},

	
	
};


module.exports= userController