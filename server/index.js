const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoints
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/api/v1/movies', (req, res) => res.status(201).send({ movies: [] }));

app.get('/api/v1/temario/:id', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.status(200).send("cool");
});

// exportar app para poder requerirlo desde otros archivos
module.exports = { app, PORT };

