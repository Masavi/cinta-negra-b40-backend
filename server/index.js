const express = require('express');
const server = express();
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 3000;
const { errors } = require('celebrate');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(fileUpload({
  useTempFiles: true,
  tempFileDir : '/tmp/',
}));

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

server.use('/api/v1', require('../router'));

server.use(errors());

// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };

