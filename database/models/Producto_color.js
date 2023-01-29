module.exports = function(sequelize, dataTypes)  {
    let alias= "Producto_color";
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
        tableName : "producto_colores",
        timestamps: false
    }
    
    const Producto_color = sequelize.define(alias, cols, config);
    Producto_color.associate = function(models){
        Producto_color.belongTo(models.Productos, {
            as : 'Productos',
            foreignKey : 'Producto_colores_id1'
        
    });
    
}
    return Producto_color;
    
    }