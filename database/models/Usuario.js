module.exports = function (sequelize, dataTypes)  {
let alias= "Usuario";
let cols = {
    id:{
        type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
    },
    fullName:dataTypes.STRING,
    fnac:dataTypes.STRING,
    password:dataTypes.STRING,
    image:dataTypes.STRING,
    email:dataTypes.STRING,  
    role: dataTypes.INTEGER  


};

let config = {
    tableName : "Usuarios",
    timestamps: false
}

const Usuario = sequelize.define(alias, cols, config);
Usuario.associate = function(models){
    Usuario.belongsTo(models.Role, {
        as : 'role',
        foreignKey : 'Roles_id'

    });
}        
return Usuario;

}