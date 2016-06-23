var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.requireAuthentication);

app.get('/', function (req,res){
	res.send('Muhammad Raza Bhojani');
});
app.get('/about', function (req,res){
	res.send('About Us');
});
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
	console.log('express server started');
});