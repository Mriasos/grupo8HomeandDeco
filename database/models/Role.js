module.exports = function(sequelize, dataTypes)  {
    let alias= "Role";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
        },
        titulo:dataTypes.STRING,
        descripcion:dataTypes.STRING,
            
    };
    
    let config = {
        tableName : "Roles",
        timestamps: false
    }
    
    const Role = sequelize.define(alias, cols, config);

    Role.associate = function(models){
        Role.hasMany(models.Usuarios,  {
            as : 'usuarios',
            foreignKey : 'Roles_id'
        
    });
    
}
return Role;
}