module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('users', {
        name : {
            type : DataTypes.STRING
        }
    });
  
    // Seller.associate = function(models) {
    //   models.sellers.hasMany(models.cars, {foreignKey:'car_id'})
    // };
  
    return User;
  };