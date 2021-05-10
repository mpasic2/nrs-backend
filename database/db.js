const Sequelize = require("sequelize");


const sequelize = new Sequelize('bazaKasa', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  
  })


const db={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports=db;
