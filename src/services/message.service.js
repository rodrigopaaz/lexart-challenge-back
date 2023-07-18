const { Messages } = require('../models');

const createMessage = async (userId, file) => {
  try {
    const message = await Messages.create({ userId, file });
    return message;
  } catch (error) {
    throw new Error('Failed to create message');
  }
};

const getMessage = async (id) => {
  try {
    const message = await Messages.findByPk(id);
    return message;
  } catch (error) {
    throw new Error('Failed to retrieve message');
  }
};

module.exports = { createMessage, getMessage };
