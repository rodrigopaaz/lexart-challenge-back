const bcrypt = require('bcrypt');

async function encryptPassword(password, keyword){
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password + keyword, salt);
  return hashedPassword;
}

async function comparePasswords(password, hashedPassword, keyword) {
  const isPasswordValid = await bcrypt.compare(password + keyword, hashedPassword);
  if(!isPasswordValid) throw new Error("invalid password");
  
  return isPasswordValid;
}

module.exports = { encryptPassword, comparePasswords };
