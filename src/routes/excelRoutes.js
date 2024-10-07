const express = require('express');
const multer = require('multer');
const { uploadExcelFile } = require('../controllers/excelController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload-excel', upload.single('file'), uploadExcelFile);

module.exports = router;
