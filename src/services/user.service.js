const { Users } = require('../models');
const { createToken } = require('../utils/JWT.token');
const { encryptPassword } = require('./validations/encriptUtils');

const createUserService = async (info) => {
  try {
    const {
      name, email, password,
    } = info;
    const userExist = await Users.findOne({
      where: {
        name, email
      },
    });
    if (userExist) throw new Error('User alredy exists');
    const keyword = process.env.KEYWORD
    const hashedPassword = await encryptPassword(password, keyword);
    const data = await Users.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = createToken( {data} );
    return { token, name: data.name, id: data.id };
  } catch (error) {
    throw new Error(error);
  }
};
const findUser = async (userId)=>{
  try {
    const user = await Users.findByPk(userId, {
      attributes: { exclude: ['password'] },
      include: 'messages'
    })
    const messageIds = user.messages.map((message) => ({id: message.id, fileName: message.fileName}))
    return {userId: user.id, messageIds: messageIds}
  } catch (error) {
    return error
  }
}

module.exports = {
  createUserService,
  findUser
};
