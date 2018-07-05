var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// Register
router.get('/register', function (req, res) {
	res.render('register');
});

// Login
router.get('/login', function (req, res) {
	res.render('login');
});

// Register User
router.post('/register', function (req, res) {
	if (req.body.email &&
		req.body.username &&
		req.body.password &&
		req.body.passwordConf) {
	  
		var userData = {
		  email: req.body.email,
		  username: req.body.username,
		  password: req.body.password,
		  passwordConf: req.body.passwordConf,
		}
	  
		//use schema.create to insert data into the db
		User.create(userData, function (err, user) {
		  if (err) {
			return next(err)
		  } else {
			return res.redirect('/users/login');
		  }
		});
	  }
});
 


module.exports = router;