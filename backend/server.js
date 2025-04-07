const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5432;

app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}`);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
