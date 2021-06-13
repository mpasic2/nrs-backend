const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    const Product = sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        price: Sequelize.DOUBLE,
        categoryId: Sequelize.INTEGER,
        discount: Sequelize.DOUBLE,
      	barCode: Sequelize.STRING,
        imgUrl: Sequelize.STRING
     }, { freezeTableName: true });

    return Product;
};