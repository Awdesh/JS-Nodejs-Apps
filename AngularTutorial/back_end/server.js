// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var _ = require('underscore');
var path = require('path');
var db = require('./db.js');
var PORT = process.env.PORT || 8000;
var IP = process.env.IP;

app.use(bodyParser.json());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/../public'));
console.log(path.resolve(__dirname, '../public/index.html'));
console.log("port is" + PORT);

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get("/questions", function(req, res) {
  var where = {};
  db.questions.findAll({
    where: where
  }).then(function(questions) {
    res.json(questions);
  }), function(e) {
    res.status(500).send();
  };
});


app.post("/askQuestion", function(req, res) {
  console.log('posting the question' + req.body);

  var body = _.pick(req.body, 'title', 'body', 'tags');
  console.log(body);
  db.questions.create(body).then(function(questions) {
    if (questions)
      return res.json(questions.toJSON());
    else
      return res.status(404).send();
  }, function(e) {
    return res.status(404).send(e);
  });
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT);
  });
});

module.exports = app;
