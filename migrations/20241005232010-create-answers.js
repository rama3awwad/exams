'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      answerText: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      QuestionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions', 
          key: 'id',         
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,    
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Answers');
  }
};
