const Sequelize = require("sequelize");


const sequelize = new Sequelize('bazaKasa', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  
  })

const db={};
  
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//import modela

db.bill = require(__dirname + '/model/bill.js')(sequelize,Sequelize.DataTypes);
db.category = require(__dirname + '/model/category.js')(sequelize,Sequelize.DataTypes);
db.employee = require(__dirname + '/model/employee.js')(sequelize,Sequelize.DataTypes);
db.order = require(__dirname + '/model/order.js')(sequelize,Sequelize.DataTypes);
db.orderItem = require(__dirname + '/model/orderItem.js')(sequelize,Sequelize.DataTypes);
db.product = require(__dirname + '/model/product.js')(sequelize,Sequelize.DataTypes);
db.user = require(__dirname + '/model/user.js')(sequelize,Sequelize.DataTypes);


  //veza više-na-više između tabela product i order 
  db.product.belongsToMany(db.order, { through: db.orderItem , foreignKey: 'productId', onDelete: 'cascade'});
  db.order.belongsToMany(db.product, { through: db.orderItem, foreignKey: 'orderId', onDelete: 'cascade' });

  //product i category tabele imaju vezu jedan-na-jedan
  db.category.hasOne(db.product, {as: 'categoryId', foreignKey: 'categoryId', onDelete: 'cascade'});

  //order i bill - jedan-na-jedan
  db.order.hasOne(db.bill, {as: 'orderId', foreignKey: 'orderId', onDelete: 'cascade'});

  //employee i order - jedan-na-više
  db.employee.hasMany(db.order, {as: 'employeeId', foreignKey: 'employeeId', onDelete: 'cascade'});

  //employee i user - jedan-na-jedan
  db.user.hasOne(db.employee, {as: 'employeeId', foreignKey:'employeeId', onDelete: 'cascade'});


module.exports=db;
