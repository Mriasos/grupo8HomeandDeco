const authenticatedValidation = (req,res,next)=>{
//verificar si el usuario esta autenticado. y quiere ingresar a /login o /registro lo redirige al perfil
    if(req.session.user){
        return redidect('/perfil')
    }
    return next();

}
module.exports = authenticatedValidation