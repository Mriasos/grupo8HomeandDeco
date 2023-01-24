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
      models.User.belongsTo(models.Roles, {
        foreignKey: "id_roles",
        targetKey: "id_roles"
      })

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
      type: DataTypes.STRING(255),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dni: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    celular:{
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
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
    tableName: 'usuarios',
    timestamps: false
  });
  return User;
};



