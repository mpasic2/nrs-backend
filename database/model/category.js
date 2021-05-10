const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    const Categories = sequelize.define('categories', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            unique: true
        }
    }, { freezeTableName: true });

    return Categories;
};
