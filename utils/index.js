const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  createToken: (payload) => {
    const token = jwt.sign({ 
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: payload,
    }, JWT_SECRET);
    return token;
  },
}