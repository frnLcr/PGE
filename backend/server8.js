const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { amount, tipPercentage } = req.body;
  
  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Monto inválido' });
  }

  const tip = (amount * tipPercentage) / 100;
  const total = amount + tip;

  res.json({ tip, total });
});

app.listen(3001, () => {
  console.log("Iniciando servidor...");
  console.log('Servidor corriendo en http://localhost:3001');
});