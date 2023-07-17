/* eslint-disable global-require */
require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
};

module.exports = {
  development: {
    ...config,
    database: process.env.MYSQL_DATABASE,
  },
};
