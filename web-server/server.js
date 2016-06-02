var express = require("express");
var app = express();
var middleware = require("./middleware.js");
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About us page..');
});

console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, function(){
    console.log('server listening now');    
});




 
