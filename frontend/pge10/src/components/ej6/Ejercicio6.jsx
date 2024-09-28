import React, { useState } from 'react';

export default function Ejercicio6() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(0);

  // Tasas de cambio predefinidas
  const rates = {
    USD: { USD: 1, EUR: 0.85, ARS: 100 }, // Ejemplo: 1 USD = 0.85 EUR y 100 ARS
    EUR: { USD: 1.18, EUR: 1, ARS: 117 }, // Ejemplo: 1 EUR = 1.18 USD y 117 ARS
    ARS: { USD: 0.01, EUR: 0.0085, ARS: 1 } // Ejemplo: 1 ARS = 0.01 USD y 0.0085 EUR
  };

  const convertCurrency = () => {
    const convertedAmount = (amount * rates[fromCurrency][toCurrency]);
    setResult(convertedAmount);
  };

  return (
    <div>
      <h2>Conversor de divisas</h2>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Cantidad"
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <button onClick={convertCurrency}>Convertir</button>
      <label>Resultado: {result.toFixed(2)} {toCurrency}</label>
    </div>
  );
};

