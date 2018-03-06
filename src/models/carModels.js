
// var Car = { make : String, year : Date, model : String, color : String, description : String, history: String};
// module_exports = car;
var Sequelize = require('sequelize');
var sequelize = require('./../dbConnect');

const Car = sequelize.define('cars',{
    make : {
        type : Sequelize.STRING
    },
    model : {
        type : Sequelize.STRING
    },
    year : {
        type : Sequelize.DATE
    },
    color :{
        type :Sequelize.STRING
    }, 
    description :{
        type : Sequelize.STRING
    }, history:{
        type : Sequelize.STRING
    }
}
)
module.exports = Car;