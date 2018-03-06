// var mysql = require("mysql");
// //Database connection
// 	 var con = mysql.createConnection({
// 		host     : 'localhost',
// 		user     : 'root',
// 		password : '',
// 		database : 'carsDB'
// 	});
// 	module.exports = con;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('carsDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
	module.exports = sequelize;
