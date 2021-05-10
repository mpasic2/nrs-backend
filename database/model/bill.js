const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    const Bill = sequelize.define('bill', {
        orderId: Sequelize.INTEGER,
        total: Sequelize.INTEGER,
        fiscalNumber: Sequelize.INTEGER,
    }, { freezeTableName: true });

    return Bill;
};
