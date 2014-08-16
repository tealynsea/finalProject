var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
	// commented out unitl we can get help
// var indexController = require('./controllers/index.js');

var app = express();

//-------------added for passport--------------

// Express Session allows us to use Cookies to keep track of
// a user across multiple pages. We also need to be able to load
// those cookies using the cookie parser
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Flash allows us to store quick one-time-use messages
// between views that are removed once they are used.
// Useful for error messages.
var flash = require('connect-flash');

// Load in the base passport library so we can inject its hooks
// into express middleware.
var passport = require('passport');

// Load in our passport configuration that decides how passport
// actually runs and authenticates
var passportConfig = require('./config/passport');

// Pull in our two controllers...
var indexController = require('./controllers/index');
var authenticationController = require('./controllers/authentication');

//-----------end of passport-------
	

	// commented out until we get help
// mongoose.connect('mongodb://localhost/applications')
	// database connect for passport
mongoose.connect('mongodb://localhost/express-passport-local');


app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
	// commented out until we get help
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser());

//-------------added for passport--------------

// Add in the cookieParser and flash middleware so we can
// use them later
app.use(cookieParser());
app.use(flash());

// Initialize the express session. Needs to be given a secret property
app.use(session({secret: 'secret'}));

// Hook in passport to the middleware chain
app.use(passport.initialize());

// Hook in the passport session management into the middleware chain.
app.use(passport.session());


// Our get request for viewing the login page
app.get('/auth/login', authenticationController.login);

// Post received from submitting the login form
app.post('/auth/login', authenticationController.processLogin);

// Post received from submitting the signup form
app.post('/auth/signup', authenticationController.processSignup);

// Any requests to log out can be handled at this url
app.get('/auth/logout', authenticationController.logout);

// ***** IMPORTANT ***** //
// By including this middleware (defined in our config/passport.js module.exports),
// We can prevent unauthorized access to any route handler defined after this call
// to .use()
app.get('/', indexController.index);

app.get('/mentee', indexController.mentee);

app.get('/mentor', indexController.mentor);

app.get('/signin', indexController.signin);

app.use(passportConfig.ensureAuthenticated);

// Because this route occurs after the ensureAuthenticated middleware, it will require
// authentication before access is allowed.


//-----------end of passport-------

//app.post('/postForm', function(req, res) {
	//console.log(req.body)

// route to add to db applications
//app.post('/postForm', indexController.addApplication)
app.get('/dashboard', indexController.dashboard)

var server = app.listen(3325, function() {
	console.log('Express server listening on port ' + server.address().port);
});
