var Flight = require('../models/flight.js');

module.exports.create = function (req, res){
	var flight = new Flight(req.body);
	flight.save(function(err, result){
		res.json(result);
	});
}

module.exports.list = function(req,res) {
	Flight.find({}, function(err, results) {
		res.json(results);
	});
}