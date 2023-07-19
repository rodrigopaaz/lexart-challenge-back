const { Users } = require('../models');
const { createToken } = require('../utils/JWT.token');
const { encryptPassword, comparePasswords } = require('./validations/encriptUtils');

const loginService = async (email, password) => {
  try {
    const keyword = process.env.KEYWORD;
    const data = await Users.findOne({ where: { email } });

    if (!data) {
      throw new Error("Email not found");
    }

    const isPasswordMatch = await comparePasswords(password, data.password, keyword);

    if (!isPasswordMatch) {
      throw new Error("Invalid password");
    }

    const token = createToken({ data });

    return {
      token,
      name: data.name,
      id: data.id
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = loginService;
