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

// Allow CORS.
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

app.get("/api/v1/getQuestions", function(req, res) {
  var where = {};
  db.question.findAll({
    where: where
  }).then(function(questions) {
    console.log(questions.title);
    res.json(questions);
  }), function(e) {
    res.status(500).send();
  };
});


app.post("/api/v1/askQuestion", function(req, res) {
  console.log('posting the question' + req.body);

  var body = _.pick(req.body, 'title', 'body', 'tags');
  console.log(body);
  db.question.create(body).then(function(question) {
    if (question)
      return res.json(question.toJSON());
    else
      return res.status(404).send();
  }, function(e) {
    return res.status(404).send(e);
  });
});

app.post("/api/v1/postAnswer", function(req, res) {
  console.log('posting the answer' + req.body);

  db.answer.create(req.body).then(function(answer) {
    if (answer)
      return res.json(answer.toJSON());
    else
      return res.status(404).send();
  }, function(e) {
    return res.status(404).send(e);
  });
});

app.get("/api/v1/getAnswerOfQuestion", function(req, res) {
  var where = {};
  var queryParams = req.query;
  console.log(queryParams);
  where.questionId = queryParams.id;
  db.answer.findAll({
    where: where
  }).then(function(answers) {
    res.json(answers);
  }), function(e) {
    res.status(500).send();
  };
});

db.sequelize.sync({
  force: true
}).then(function() {
  app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT);
  });
});

module.exports = app;
