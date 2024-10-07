const { loadExcelFile } = require('../services/excelService');

const uploadExcelFile = async (req, res) => {
  try {
    const filePath = req.file.path; 
    await loadExcelFile(filePath);
    res.status(200).json({ message: 'File processed and data saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process the Excel file.' });
  }
};

module.exports = { uploadExcelFile };
