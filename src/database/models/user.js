'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //models.User.belongsTo()

    }
  }
  User.init({
    id_usuarios: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    provincia: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    celular:{
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
    allowNull: false
  },
  image:{
    type: DataTypes.BLOB('long'),
    allowNull: false
  },
  id_roles:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull:false
  },

  }, {
    sequelize,
    modelName: 'User',
    tableName: 'usuarios'
  });
  return User;
};