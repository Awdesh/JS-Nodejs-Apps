module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answer', {
    body: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isRightAnswer: {
      type: DataTypes.BOOLEAN
    }
  });
};
