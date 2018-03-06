var carModels = require('./../models/carModels');

export const getCars =(req, res) => {
    carModels.findAll({}, (err, cars) => {
        if(err)
        {
            res.send(err);
        }
        return res.send(cars);
    })
}