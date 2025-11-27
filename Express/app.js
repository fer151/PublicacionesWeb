const express = require('express'); 
const cors = require('cors'); 
const app = express();      

app.use(cors());
app.use(express.json());

// Ruta raíz solo como prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente en Vercel 🚀');
});

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

// ✅ Exportar app para Vercel
module.exports = app;
