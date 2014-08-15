var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/applications')

app.get('/', indexController.index);

app.get('/mentee', indexController.mentee);

app.get('/mentor', indexController.mentor);

//app.post('/postForm', function(req, res) {
	//console.log(req.body)

// route to add to db applications
app.post('/postForm', indexController.addApplication)


var server = app.listen(3325, function() {
	console.log('Express server listening on port ' + server.address().port);
});
