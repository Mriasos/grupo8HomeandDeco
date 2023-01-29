module.exports = function (sequelize, dataTypes) {
    let alias= "Producto";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
        },

        nombre: dataTypes.STRING, 
        descripcion: dataTypes.STRING, 
        image: dataTypes.STRING, 
        precio : dataTypes.STRING, 
        descuento:dataTypes.STRING, 
        Producto_categorias_id1 : dataTypes.INTEGER , 
        Producto_colores_id1: dataTypes.INTEGER 
    
    
    };
    
    let config = {
        tableName : "Productos",
        timestamps: false
    }
    
    const Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models){
        Producto.hasMany(models.Producto_colores, {
            as : 'producto_colores',
            foreignKey : 'Producto_colores_id1'
    
        });
        
            Producto.hasMany(models.Producto_categorias, {
                as : 'producto_categorias',
                foreignKey : 'Producto_categorias_id1'
         });        
    }        
    return Producto;
    
    }