module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('users', {
        username : {
            type : DataTypes.STRING
        },
        password : {
            type : DataTypes.STRING
        },
        role : {
            type : DataTypes.STRING
        }
    },{
        timestamps: false
      });
  
    return User;
  };