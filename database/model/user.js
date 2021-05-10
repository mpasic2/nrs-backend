const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        username: {type: Sequelize.STRING, unique: true, allowNull: false,},
        password: {type: Sequelize.STRING, allowNull: false,},
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        address: Sequelize.STRING,
        birthDate: Sequelize.DATE
    },
    {freezeTableName: true});



    return User;
};
