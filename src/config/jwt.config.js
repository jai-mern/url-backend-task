// jwt.config.js
module.exports = {
    secretKey: process.env.JWT_SECRET_KEY || 'defaultsecretkey',
    expiresIn: '1h', // Token expiration time
  };
  