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

module.exports = middleware

