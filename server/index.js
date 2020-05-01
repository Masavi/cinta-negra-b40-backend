const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

server.use('/api/v1', require('../router'));

// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };

