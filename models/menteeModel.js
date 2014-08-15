var mongoose = require('mongoose');

var menteeSchema = mongoose.model('menteeSchema', {

	user: String,
	password: String,
	goals: String,
	project: String,
	interests: String

});

module.exports = menteeSchema