const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const {
  userRouter, loginRouter, messageRouter,
} = require('./routes');

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/message', messageRouter);

module.exports = app;
