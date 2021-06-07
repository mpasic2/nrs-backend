const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    const Bill = sequelize.define('bill', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        orderId: Sequelize.INTEGER,
        total: Sequelize.DOUBLE,
        fiscalNumber: Sequelize.INTEGER,
    }, { freezeTableName: true });

    return Bill;
};
