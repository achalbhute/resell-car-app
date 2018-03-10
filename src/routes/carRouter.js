import models from './../models';
import express from 'express';
import jwt from 'jsonwebtoken';
import config from './../config/config';

var router = express.Router();

function checkAuth(req, res, next) {

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
}

function checkRole(req, res, role, callback) {
	var role_func;
	if (typeof role === 'string') {
		role_func = function (r) {
			return r == role;
		}
	} else {
		role_func = function (r) {
			return role.indexOf(r) >= 0;
		};
	}
	if (role_func(res.locals.user.role)) {
		callback();
	} else {
		return res.send({ auth: false, message: 'Failed to authenticate.' });
	}
}
router.get('/', checkAuth, function (req, res) {
	if(res.locals.user.role == 'buyer'){
		models.cars.findAll({
			where: { buyer_id: null },
			include: [{ model: models.users, as: 'seller' }] //buyer is not null
		}).then(function (cars) {
			return res.send(cars);
		});
	}else if(res.locals.user.role == 'seller'){
		models.cars.findAll({
			include: [{ model: models.users, as: 'seller' }, { model: models.users, as: 'buyer' }]/// buyer is null
		}).then(function (cars) {
			return res.json(cars);
		});
	}else{
		return res.send({ auth: false, message: 'Failed to authenticate.' });
	}
});

router.get('/available', checkAuth, function (req, res) {
		models.cars.findAll({
			where: { buyer_id: null },
			include: [{ model: models.users, as: 'seller' }] //buyer is not null
		}).then(function (cars) {
			res.send(cars);
		});
});

router.post('/', checkAuth, function (req, res) {
	checkRole(req, res, 'seller', function () {
	models.cars.create({
		make: req.body.make, model: req.body.model, year: req.body.year, color: req.body.color,
		description: req.body.description, history: req.body.history, seller_id: req.body.seller_id
	})
		.then(function () {
			res.json({
				success:true,
				message: "Created new Car entry!"
			});
		});
	});
});

router.get('/:id', checkAuth, function (req, res) {
	models.cars.findOne({
		where: { id: req.params.id },
		include: [{ model: models.users, as: 'seller' }, { model: models.users, as: 'buyer' }]
	}).then(function (cars) {
		res.send(cars);
	});
});

router.patch('/:id', checkAuth, function (req, res) {
	checkRole(req, res, 'buyer', function () {
	models.cars.update({ "buyer_id": req.body.buyer_id }, { where: { id: req.params.id } })
		.then(function () {
			res.json({
				success:true,
				message: 'Successfully updated car entry!'
			});
		});
	});
});



module.exports = router;