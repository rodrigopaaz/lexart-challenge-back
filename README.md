# Lexart Chatbot Project

![Chatbot Robot](https://static.vecteezy.com/system/resources/previews/022/254/572/large_2x/robot-working-on-laptop-computer-artificial-intelligence-concept-3d-rendering-generative-ai-free-photo.jpg)

This project implements a chatbot with interactive features and user registration functionality. The chatbot is designed to respond to specific messages and provide personalized assistance to users.
# Lexart Challenge

## Description
This project is a chat application developed for the Lexart Challenge.

## Features
- User registration and login

## Technologies Used
- Node.js
- Express.js
- JWT
- Bcrypt
- Sequelize
- Database: Mysql
- File Uploads: Multer

## Installation
1. Clone the repository: `git clone git@github.com:rodrigopaaz/lexart-challenge-back.git`
2. Install dependencies: `npm install`
3. Set up the database:
   - Create a mySql database
4. Start the server: `npm start`

## Usage
- Register a new user using POST on route /user
- Login using POST on route /login
- Get the user messages using the route /message/{userId}

## Environment variables

To run this project, you will need to add the following environment variables to your .env

`MYSQL_USER`= Database username

`MYSQL_PASSWORD`= Database password

`MYSQL_HOST`=  Database host

`MYSQL_PORT`= Database port

`PORT`= Port that will be used in backend

`MYSQL_DATABASE`= database name

`KEYWORD`=keyword used by bcrypt

<hr>

## Contributors

- [Rodrigo paz](https://github.com/rodrigopaaz)
