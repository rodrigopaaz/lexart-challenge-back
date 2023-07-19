# Lexart Chatbot Project

![Chatbot Robot](https://res.cloudinary.com/practicaldev/image/fetch/s--Do26DEeT--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/uskd4x557wno7irs1q71.png)
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
  
The application has tests of the main functionalities.

![Tests](https://i.imgur.com/Gl0yOp1.png)

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
