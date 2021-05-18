const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    const Employee = sequelize.define('employee', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        userId: Sequelize.INTEGER,
        managerId: Sequelize.INTEGER,
        hireDate: Sequelize.DATE,
        jobTitle: Sequelize.STRING,
        role: Sequelize.INTEGER
        
    }, { freezeTableName: true });

    return Employee;
};
