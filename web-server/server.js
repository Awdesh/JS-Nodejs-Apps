var express = require("express");
var app = express();
var middleware = require("./middleware.js");
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About us page..');
});

app.get('/', function(req, res){
    res.send('Welcome to our home page.');
});

app.get('/developer_login/sign_in', function(req, res){
	console.log(req.body);
	res.send('logged in succesfully.');
});

app.post('/sign_up', function(req, res){
	console.log("inside sign up..");
	console.log(req.body);
	res.send('signed up succesfully.');
});

app.post('/create_account', function(req, res){
	console.log(req.body);
	res.send('account has been created succesfully.');
});

//console.log(__dirname);

app.listen(PORT, function(){
    console.log('server listening now on port' + PORT);    
});




 
