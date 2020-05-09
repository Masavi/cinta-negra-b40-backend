const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const JWT_SECRET = process.env.JWT_SECRET;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = {
  createToken: (payload) => {
    const token = jwt.sign({ 
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: payload,
    }, JWT_SECRET);
    return token;
  },
  uploadFile: (tempFilePath) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(tempFilePath, function(error, result) {
        if (result) resolve(result);
        if (error) reject(error);
      });
    });
  },
}