var menteeModel = require('../models/menteeModel.js')
var mentorModel = require('../models/mentorModel.js')



var indexController = {
	index: function(req, res) {
		res.render('index');

	},
	mentee: function(req, res) {
		res.render('mentee');
	},
	mentor: function(req, res) {
		res.render('mentor')
	},
	


  addApplication: function(req, res) {

	var userName = req.body.user;
	var password = req.body.password;
	var goals = req.body.goals;
	var project = req.body.project;
	var interests = req.body.interests;
	var teaching = req.body.teaching;
	var schedule = req.body.schedule;

console.log(req.body);
	if(req.body.role === 'mentee'){
		var newApplication = new menteeModel({
			user: userName,
			password: password,
			goals: goals,
			project: project,
			interests: interests
		});
	}
	else if(req.body.role === 'mentor'){
		// make a mentor model
		var newApplication = new mentorModel({
			user: userName,
			password: password,
			goals: goals,
			teaching: teaching,
			schedule: schedule,
			interests: interests
		})
	}
	newApplication.save()

	res.send("ok")
}

};




module.exports = indexController;