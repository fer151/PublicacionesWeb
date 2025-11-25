const express = require('express'); 
const cors = require('cors'); 
const app = express();      




app.use(cors())

app.get('/alumnos', (req, res) => {
  console.log(req.query);
  res.send(`Hola ${req.query.nombre}, tienes ${req.query.edad} años`);
});

app.get('/docentes/:Control', (req, res) => {
  console.log(req.params);
  res.send('Hello World fernando!');
});

app.post('/directivas', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});