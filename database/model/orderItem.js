const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    const OrderItem = sequelize.define('orderItem', {
        orderId: Sequelize.INTEGER,
        productId: Sequelize.INTEGER,
        quantity: Sequelize.INTEGER,
    }, { freezeTableName: true });

    return OrderItem;
};
