const express = require('express');
const multer = require('multer');
const { messageController } = require('../controllers');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), messageController.createMessageController);

module.exports = router;
