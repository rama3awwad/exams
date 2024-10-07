const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Question = require('./questionModel');

const Answer = sequelize.define('Answer', {
    answerText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

Question.hasMany(Answer, { onDelete: 'CASCADE' });
Answer.belongsTo(Question);

module.exports = Answer;
