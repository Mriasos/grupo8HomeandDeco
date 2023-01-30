'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class usuarios extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            usuarios.belongsTo(models.roles, {
                foreignKey: 'rolId',
                as: 'rol',
            });
        }
    }

    usuarios.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        full_name: DataTypes.STRING,
        fnac: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
        email: DataTypes.STRING,
        rol_id: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'usuarios',
    });

    return usuarios;
};