var models = require('./../models');

var express = require('express');
var router  = express.Router();

router.post('/login', function(req, res) {
    models.users.findOne({
        where: {username: req.body.username,password : req.body.password}
    }).then(function(user) {
        res.send('successfully logged in')
        // if(user.role=='seller')
        // res.redirect('/cars/');
        // else
        // res.redirect('/cars/available');
    });
  });

  
  module.exports = router;