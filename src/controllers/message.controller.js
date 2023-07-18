const { messageService } = require('../services');

const createMessageController = async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await messageService.createMessage(userId, req.file.buffer);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const findMessageController = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await messageService.getMessage(id);

    if (message) {
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=output.csv');
      res.send(message.file);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { createMessageController, findMessageController };
