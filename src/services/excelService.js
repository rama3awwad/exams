const XLSX = require('xlsx');
const Question = require('../models/questionModel');
const Answer = require('../models/answerModel');
const loadExcelFile = async (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  console.log(sheet); 

  for (const row of sheet) {
    const { question, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 } = row;

    //console.log(question); 

    const newQuestion = await Question.create({ questionText: question });

    await Answer.create({
      answerText: correctAnswer,
      isCorrect: true,
      QuestionId: newQuestion.id
    });

    await Answer.bulkCreate([
      { answerText: wrongAnswer1, isCorrect: false, QuestionId: newQuestion.id },
      { answerText: wrongAnswer2, isCorrect: false, QuestionId: newQuestion.id },
      { answerText: wrongAnswer3, isCorrect: false, QuestionId: newQuestion.id }
    ]);
  }
};


module.exports = { loadExcelFile };
