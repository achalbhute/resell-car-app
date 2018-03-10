import express from 'express';
import models from './../models';
import session from 'express-session';
import jwt from 'jsonwebtoken';
import config from './../config/config';
 import bcrypt from 'bcryptjs';

var router  = express.Router();
var sess;

router.post('/login', function(req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    models.users.findOne({
        where: {username: req.body.username}
    }).then(function(user) {
        if(user){
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) {
                return res.send({ auth: false, token: null })
            };
            user.password = "";
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
              });
              return res.json({success:true, token, user});
         }else{
            return res.send({ auth: false, token: null })
         }
        
    });
  });

  router.get('/me',function(req, res, next){
    var token = req.headers['x-access-token'];
	if (!token) {
		return res.send({ auth: false, message: 'No token provided.' });
	}
	jwt.verify(token, config.secret, function (err, decoded) {
		if (err) {
			return res.send({ auth: false, message: 'Failed to authenticate token.' });
		}
		var userID = decoded.id;
		models.users.findById(userID)
			.then(function (user) {
				res.locals.user = user.dataValues;
				next();
			})
	});
  }, function(req, res){
          res.locals.user.password ="";
          res.json(res.locals.user);
    })
  module.exports = router;