module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    tags: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    }
  });
};
