'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ventas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ventas.init({
    id_ventas: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    id_productos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_mediosDePago: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_pedidos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Ventas',
    tableName: 'ventas'
  });
  return Ventas;
};