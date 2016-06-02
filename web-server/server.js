var express = require("express");
var app = express();

// application level middleware, runs for all the application level. like logger which logs in
// result from all the application pages.
// routing level middleware, runs just once for the specified route like login page.

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next){
        console.log('Request:' + req.method + ' ' + req.originalUrl + ' ' + new Date().toString());
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About us page..');
});

console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, function(){
    console.log('server listening now');    
});




 
