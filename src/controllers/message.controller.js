const { messageService } = require('../services');

const createMessageController = async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await messageService.createMessage(userId, req.file);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { createMessageController };
