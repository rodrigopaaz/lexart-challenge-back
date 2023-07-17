const { Messages } = require('../models');

const createMessage = async (userId, file) => {
    const message = await Messages.create({userId, file})
    return message
}

module.exports = {createMessage}