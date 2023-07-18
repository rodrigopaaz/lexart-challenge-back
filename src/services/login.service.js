const { Users } = require('../models');
const { createToken } = require('../utils/JWT.token');
const { encryptPassword, comparePasswords } = require('./validations/encriptUtils');

const loginService = async (email, password) => {
  try {
    const keyword = process.env.KEYWORD;
    const hashedPassword = await encryptPassword(password, keyword);
    const data = await Users.findOne({
      where: { email }
    });
    if(!data) throw new Error("email not found");
    await comparePasswords(password, hashedPassword, keyword );
    const token = createToken({ data });
    return { token, name: data.name, id: data.id };
  } catch (error) {
    return {message: error}
  }
 
};

module.exports = loginService;
