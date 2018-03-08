
module.exports = (sequelize, DataTypes) => {
    var Car = sequelize.define('cars', {
        make: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.DATE
        },
        color: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }, history: {
            type: DataTypes.STRING
        }
    });

    Car.associate = function (models) {
        models.cars.belongsTo(models.users, { foreignKey: 'seller_id', as: "seller" });
        models.cars.belongsTo(models.users, { foreignKey: 'buyer_id', as: "buyer" });
    };

    return Car;
};