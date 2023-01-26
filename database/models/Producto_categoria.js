module.exports = (sequelize, dataTypes) => {
    let alias= "Producto_categoria";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
        },
        image:dataTypes.STRING,
        titulo:dataTypes.STRING,
        
            
    };
    
    let config = {
        tableName : "producto_categorias",
        timestamps: false
    }
    
    const Producto_categoria = sequelize.define(alias, cols, config);
    Producto_categoria.associate = function(models){
        Producto_categoria.belongsTo(models.Productos, {
            as : 'Productos',
            foreignKey : 'id'
        
    })
    
}
    return Producto_categoria;
    
    }