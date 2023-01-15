'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Productos.init({
    id_usuarios: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    articuloProducto: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcionProducto: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }, 
    imageProducto: {
     
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull:false
    },
    altaProducto: {
      type: DataTypes.DATE,
      allowNull:false
    },
    modificarProducto: {
      type: DataTypes.DATE
    },
    eliminarProducto: {
      type: DataTypes.STRING(45),
    },
    listarProducto: {
      type: DataTypes.STRING(45),
    },
    
  }, {
    sequelize,
    modelName: 'Productos',
    tableName: 'productos'
  });
  return Productos;
};