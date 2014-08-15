var mongoose = require('mongoose');

var mentorSchema = mongoose.model('mentorSchema', {

	user: String,
	password: String,
	goals:  String,
	teaching:  String,
	schedule:  String,
	interests:  String

});


module.exports = mentorSchema