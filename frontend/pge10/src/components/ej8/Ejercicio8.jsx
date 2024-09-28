import React, { useState } from 'react';
import './styles.css';

export default function Ejercicio8() {
  const [amount, setAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15); // Por defecto 15%
  const [tip, setTip] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState('');

  const calculateTip = async () => {
    if (isNaN(amount) || amount <= 0) {
      setError('Por favor ingresa un monto válido.');
      return;
    }

    setError(''); // Limpiar el mensaje de error
    try {
      const response = await fetch('http://localhost:3001/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: parseFloat(amount), tipPercentage }),
      });
      const data = await response.json();
      setTip(data.tip);
      setTotal(data.total);
    } catch (error) {
      setError('Error en la comunicación con el servidor.');
    }
  };

  // Función para reiniciar los valores a su estado inicial
  const handleReset = () => {
    setAmount('');
    setTipPercentage(15); // Resetear al porcentaje por defecto
    setTip(null);
    setTotal(null);
    setError('');
  };

  return (
    <div>
      <h2>Calculadora de Propinas</h2>
      <div className="button-container">
        <label>Monto de la cuenta: </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="button-container">
        <label>Porcentaje de propina: </label>
        <select value={tipPercentage} onChange={(e) => setTipPercentage(e.target.value)}>
          <option value={10}>10%</option>
          <option value={15}>15%</option>
          <option value={20}>20%</option>
        </select>
      </div>
      <button onClick={calculateTip}>Calcular</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tip !== null && (
        <div>
          <p>Propina: ${tip.toFixed(2)}</p>
          <p>Total con propina: ${total.toFixed(2)}</p>
        </div>
      )}
      <div className="button-container">
        <button onClick={handleReset}>Clear</button>
      </div>
    </div>
  );
}
