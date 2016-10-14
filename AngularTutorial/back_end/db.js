var Sequelize = require("sequelize");
var sequelize = new Sequelize(undefined, undefined, undefined, {
  dialect: 'sqlite',
  storage: __dirname + '/data/dev-questions-api.sqlite'
});

var db = {};
// sequelize.import let us import models so that it'll be modular.
db.question = sequelize.import(__dirname + '/models/question.js');
db.answer = sequelize.import(__dirname + '/models/answer.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.answer.belongsTo(db.question);
db.question.hasMany(db.answer);

module.exports = db;
