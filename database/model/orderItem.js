const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    const OrederItem = sequelize.define('orederItem', {
        orderId: Sequelize.INTEGER,
        productId: Sequelize.INTEGER,
        quantity: Sequelize.INTEGER,
    }, { freezeTableName: true });

    return OrederItem;
};
