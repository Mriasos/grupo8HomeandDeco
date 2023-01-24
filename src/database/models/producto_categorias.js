'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedidos.init({
    id_pedidos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fechaCompra: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    direccionEntrega: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    recargoEnvio: {
      type: DataTypes.FLOAT,
    },
    descuento: {
      type: DataTypes.FLOAT,
    },
    totalPago: {
      type: DataTypes.FLOAT,
    },
    altaPedido: {
      type: DataTypes.DATE,
      allowNull: false
    },
    verPedido: {
      type: DataTypes.BLOB('long'),
      allowNull: false
    },
    modificarPedido: {
      type: DataTypes.STRING(45),
    }, 
    eliminarPedido: {
      type: DataTypes.STRING(45)
    },
    producto: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    id_carritoCompra: {
      type: DataTypes.INTEGER,
      allowNull: false
    }


  }, {
    sequelize,
    modelName: 'Pedidos',
    tableName: 'pedidos'
  });
  return Pedidos;
};