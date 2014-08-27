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
	resources: function(req, res) {
		res.render('resources')
	},
	public: function(req, res) {
		req.user.public = (req.body.optionsRadio === "yes")? true: false;
		req.user.save(function(){

		res.redirect('/dashboard')
		})
	},
	admin: function(req, res) {
		if (req.user.username === "admin"){
			User.find({approved: false}, function(err, docs){

	 			res.render('admin', {
	 		 
	 				allUsers: docs
	 			})
	 		})
		}
		else{
			res.send(403);
		}
	},
	// change approve from false to true for user where _id = req.params.id
	approve: function(req, res) {
		if (req.user.username === "admin"){
			User.findByIdAndUpdate(req.params.id, {approved: true}, function(error, results) {
			console.log('approving', req.params.id)
			})
		}
		else{
			res.send(403);
		}	
	},
	// delete user where _id = req.params.id
	delete: function(req, res) {
		if (req.user.username === "admin"){
			User.findByIdAndRemove( req.params.id, function(error, results) {
			})
		}
		else{
			res.send(403);
		}
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
 	console.log(req.user)
 	var role = (req.user.role === "mentor")? "mentee": "mentor"
 	User.find({role: role, public: true, approved: true}, function(err, docs){

 	res.render('dashboard', {
 		user: req.user,
 		allUsers: docs
 	})
 		
 	})
 }

};




module.exports = indexController;