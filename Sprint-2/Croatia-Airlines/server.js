var express 		  = require('express'),
	app 	 		  = express(),
	bodyParser 		  = require('body-parser'),
	mongoose 		  = require('mongoose'),
	flightsController = require('./server/controllers/FlightsController')

mongoose.connect('mongodb://localhost:27017/croatia-airline');

app.use(bodyParser());

app.get('/', function(req,res){
	res.sendfile(__dirname + '/public/views/index.html');
});

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/styles', express.static(__dirname + '/public/views/styles'));
app.use('/img', express.static(__dirname + '/public/views/img'));

//REST API
app.get('/api/flights', flightsController.list);
app.post('/api/flights', flightsController.create);

app.listen(3000, function() {
	console.log('listenning to port 3000...');
})