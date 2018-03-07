var models = require('./../models');

var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    models.cars.findAll({
      include: [ {model:models.users,as:'seller'},{model:models.users,as:'buyer'}]/// buyer is null
    }).then(function(cars) {
        res.send(cars);
    });
  });

  router.get('/available', function(req, res) {
    models.cars.findAll({
        where: {buyer_id: null},
      include: [{model:models.users,as:'seller'}] //buyer is not null
    }).then(function(cars) {
        res.send(cars);
    });
  });

  router.post('/', function(req, res) {
    models.cars.create({make: req.body.make, model : req.body.model, year : req.body.year, color : req.body.color,
         desciption : req.body.desciption,history : req.body.history,seller_id : req.body.seller_id})
         .then(function() {
            res.redirect('/');
    });
  });
  
  router.get('/:id', function(req, res) {
    models.cars.findOne({
        where: {id: req.params.id},
      include: [ {model:models.users,as:'seller'},{model:models.users,as:'buyer'} ]
    }).then(function(cars) {
        res.send(cars);
    });
  });

  router.patch('/:id', function(req, res) {
    models.cars.update({"buyer_id": req.body.buyer_id},{where:{ id : req.params.id}})
         .then(function() {
            res.send('successfully updated');
    });
  });

 
  module.exports = router;