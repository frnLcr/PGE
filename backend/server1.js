const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para la conversión
app.post('/convert', (req, res) => {
    const { celsius } = req.body;
    if (isNaN(celsius)) {
        return res.status(400).json({ error: 'El valor debe ser un número' });
    }
    const fahrenheit = (celsius * 9/5) + 32;
    res.json({ fahrenheit });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Iniciando servidor...");
    console.log(`Servidor corriendo en  http://localhost:${PORT}`);
});
