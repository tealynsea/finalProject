var menteeModel = require('../models/menteeModel.js')
var mentorModel = require('../models/mentorModel.js')
var User = require('../models/user.js')



var indexController = {
	index: function(req, res) {
		res.render('index', {
			user: req.user
		});

	},
	mentee: function(req, res) {
		res.render('mentee');
	},
	mentor: function(req, res) {
		res.render('mentor')
	},
	signin: function(req, res) {
		res.render('signin')
	},
	


  addApplication: function(req, res) {

	var userName = req.body.user;
	var password = req.body.password;
	var language = req.body.optionsRadios;
	var goals = req.body.goals;
	var project = req.body.project;
	var interests = req.body.interests;
	var teaching = req.body.teaching;
	var schedule = req.body.schedule;
	var area = req.body.optionsCheck;
	var experience = req.body.optionsCheck;
	var summary = req.body.summary;

console.log(req.body);
	if(req.body.role === 'mentee'){
		var newApplication = new menteeModel({
			user: userName,
			password: password,
			language: language,
			goals: goals,
			project: project,
			interests: interests,
			area: area,
			experience: experience,
			summary: summary
		});
	}
	else if(req.body.role === 'mentor'){
		// make a mentor model
		var newApplication = new mentorModel({
			user: userName,
			password: password,
			language: language,
			goals: goals,
			teaching: teaching,
			schedule: schedule,
			interests: interests,
			area: area,
			experience: experience,
			summary: summary
		})
	}
	newApplication.save()

	res.send("ok")
},

 dashboard: function(req, res) {
 	//res.send(req.user)
 	var role = (req.user.role === "mentor")? "mentee": "mentor"
 	User.find({role: role}, function(err, docs){

 	res.render('dashboard', {
 		user: req.user,
 		allUsers: docs
 	})
 		
 	})
 }

};




module.exports = indexController;