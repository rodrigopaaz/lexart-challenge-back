const { loginService } = require('../services');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await loginService(email, password);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = loginController;
