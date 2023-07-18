const express = require('express');
const { userController } = require('../controllers');
const { validatePassword, validateEmail, validateName } = require('../middlewares/login.validate');

const router = express.Router();

router.post(
  '/',
  validatePassword,
  validateEmail,
  validateName,
  userController.createUserController,
);
router.get('/:id', userController.findUserController);

module.exports = router;
