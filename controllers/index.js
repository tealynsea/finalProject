var indexController = {
	index: function(req, res) {
		res.render('index');

	},
	mentee: function(req, res) {
		res.render('mentee');
	},
	mentor: function(req, res) {
		res.render('mentor')
	}
};

module.exports = indexController;