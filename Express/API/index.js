const express = require("express");
const app = express();

// Si quieres servir tu index.html desde aquí:
app.get("/", (req, res) => {
  res.send("Servidor funcionando en Vercel 🚀");
});

// Exportación obligatoria para Vercel
module.exports = app;
