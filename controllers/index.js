var indexController = {
	index: function(req, res) {
		res.render('index');

	},
	mentee: function(req, res) {
		res.render('mentee');
	}
};

module.exports = indexController;