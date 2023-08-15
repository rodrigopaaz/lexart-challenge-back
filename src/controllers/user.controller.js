const { createUserService, findUser } = require('../services/user.service');

const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await createUserService({
      name,
      email,
      password,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

const findUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await findUser(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createUserController,
  findUserController,
};
