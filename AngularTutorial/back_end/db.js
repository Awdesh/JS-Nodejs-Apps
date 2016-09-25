var Sequelize = require("sequelize");
var sequelize = new Sequelize(undefined, undefined, undefined, {
  dialect: 'sqlite',
  storage: __dirname + '/data/dev-questions-api.sqlite'
});

var db = {};
// sequelize.import let us import models so that it'll be modular.
db.questions = sequelize.import(__dirname + '/models/questions.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.todo.belongsTo(db.user);
// db.user.hasMany(db.todo);

module.exports = db;
