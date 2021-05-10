const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    const Employer = sequelize.define('employer', {
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
        rule: Sequelize.INTEGER
        
    }, { freezeTableName: true });

    return Employer;
};
