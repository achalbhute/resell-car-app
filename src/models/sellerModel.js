var Sequelize = require('sequelize');
var sequelize = require('./../dbConnect');

const Seller = sequelize.define('sellers',{
    name : {
        type : Sequelize.STRING
    },
    car_id : {
        type : Sequelize.INTEGER
    }
}
)
module.exports = Seller;