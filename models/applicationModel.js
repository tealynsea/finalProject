var mongoose = require('mongoose');

var applicationSchema = mongoose.model('applicationSchema', {

	userName: String

});
// new applicationSchema({userName: 'Teri'})
module.exports = applicationSchema