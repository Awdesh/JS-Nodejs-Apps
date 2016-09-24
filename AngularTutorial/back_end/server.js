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
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get("/activities", function(req, res) {
  console.log(PORT);
  var queryParams = req.query;
  console.log(queryParams);
  var where = {};

  if (queryParams.hasOwnProperty('personalText')) {
    where.personalText = {
      $like: '%' + queryParams.personalText + '%'
    };
  } else if (queryParams.hasOwnProperty('professionalText')) {
    where.professionalText = {
      $like: '%' + queryParams.professionalText + '%'
    };
  } else if (queryParams.hasOwnProperty('otherText')) {
    where.otherText = {
      $like: '%' + queryParams.otherText + '%'
    };
  }
  console.log('reached here');
  db.activities.findAll({
    where: where
  }).then(function(activities) {
    console.log(activities);
    res.json(activities);
  }), function(e) {
    res.status(500).send();
  // process.exit(1);
  };
});

app.get("/weekactivities", function(req, res) {
  // var days = req.query;
  var date = new Date();
  var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  console.log(last);

  db.activities.findAll({
    where: {
      createdAt: {
        $gt: last
      }
    }
  }).then(function(activities) {
    res.json(activities);
  }),
  function(e) {
    res.status(500).send();
  };
});

app.get("/monthactivities", function(req, res) {
  // var days = req.query;
  var date = new Date();
  var last = new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000);

  db.activities.findAll({
    where: {
      createdAt: {
        $gt: last
      }
    }
  }).then(function(activities) {
    res.json(activities);
  }),
  function(e) {
    res.status(500).send();
  };
});

app.get("/todayactivities", function(req, res) {
  // var days = req.query;
  var date = new Date();
  var n = date.getDate();
  console.log('calling todays activities');
  console.log(date);
  console.log(n);

  db.activities.findAll({
    where: {
      createdAt: {
        $eq: n
      }
    }
  }).then(function(activities) {
    res.json(activities);
  }),
  function(e) {
    res.status(500).send();
  };
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/activities", function(req, res) {
  var body = _.pick(req.body, 'personalText', 'professionalText', 'otherText');
  // var body = req.body;
  console.log("body is-:" + body);
  db.activities.create(body).then(function(activities) {
    if (activities)
      return res.json(activities.toJSON());
    else
      return res.status(404).send();
  }, function(e) {
    return res.status(404).json(e);
  });
});

db.sequelize.sync({
  force: true
}).then(function() {
  app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT);
  });
});

module.exports = app;
