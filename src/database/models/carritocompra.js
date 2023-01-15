'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carritocompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carritocompra.init({
    id_carritoCompra: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
    },
    agregarProducto: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    vaciarCarrito:{
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    id_usuarios:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidadProducto:{
      type: DataTypes.TINYINT,
      allowNull: false
    },
    producto: {
      type: DataTypes.STRING(45)
    }

    
  }, {
    sequelize,
    modelName: 'Carritocompra',
    tableName: 'carritocompra'
  });
  return Carritocompra;
};