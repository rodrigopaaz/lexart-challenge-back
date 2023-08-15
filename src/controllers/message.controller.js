const { messageService } = require('../services');

const createMessageController = async (req, res) => {
  try {
    const { userId, fileName } = req.body;
    const result = await messageService.createMessage(userId, fileName, req.file.buffer);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const findMessageController = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await messageService.getMessage(id);
    const { fileName } = message.dataValues;
    const formattedFileName = fileName.replace(/\//g, '-');
    if (message) {
      res.attachment(`${formattedFileName}.csv`);
      res.setHeader('Content-Type', 'text/csv');
      res.send(message.file);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { createMessageController, findMessageController };
