'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roles.init({
    id_roles: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    cliente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    administrador: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    proveedor: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    vendedor: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Roles',
    tableName: 'roles'
  });
  return Roles;
};