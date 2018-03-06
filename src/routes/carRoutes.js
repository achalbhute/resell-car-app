var carModels = require('./../models/carModels');
var sellerModel = require('./../models/sellerModel');
import {getCars} from '../controllers/carController';

const routes = (app) => {
    app.route('/cars')
    .get(getCars);

    // app.get('/cars/:id', function(req, res, next){
    //     carModels.findOne().then(car =>{
    //         car.get(req.params.id);
    //     })
    // });

    // app.get('/seller/cars', function(req, res, next){
    //     sellerModel.findAll().then(seller => {
    //         res.send(seller);
    //     })
    // })
};

export default routes;