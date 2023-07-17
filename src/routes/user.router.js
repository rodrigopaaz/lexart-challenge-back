const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', userController.createUserController);
router.get('/:id', userController.findUserController);

module.exports = router;
