const path = require('path');
//const User = require('src/modelo/User.js'); //modelo de User.JS para editar,buscar,eliminar usu

const renderRegister = (req, res) => {
    return res.render(path.resolve('src/views/user/register.ejs'))
}

const renderLoggin = (req, res) => {
    return res.render(path.resolve('src/views/user/login.ejs'))
}

const store= (req,res)=>{

}
//pongo para verificar
//let userToCreate ={
  //  ...req.body,
    //passsword:bcryptjs.hashSync(req.body.password, 10),
    //avatar:req.file.filename
    
//}
module.exports= {renderLoggin, renderRegister,store}
