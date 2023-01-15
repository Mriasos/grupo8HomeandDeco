'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mediosdepago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mediosdepago.init({
    id_mediosDePago: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    tarjetaDeCredito: {
      type: DataTypes.TINYINT,
      allowNull:false
    },
    transferencia: {
      type: DataTypes.TINYINT,
      allowNull:false
    },
    billetera: {
      type: DataTypes.TINYINT,
      allowNull:false
    },
    mercadoLibre: {
      type: DataTypes.TINYINT,
      allowNull:false
    },
    id_ventas: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Mediosdepago',
    tableName: 'mediosdepago'
  });
  return Mediosdepago;
};