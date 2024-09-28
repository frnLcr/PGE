import React, { useState } from 'react';
import './styles.css';

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAddExpense({ description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Descripción</label>
        <input className='inputej3'
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Monto</label>
        <input className='inputej3'
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Agregar Gasto</button>
    </form>
  );
}

function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <ul key={index}>
          {expense.description}: ${expense.amount}
        </ul>
      ))}
    </ul>
  );
}


function CurrencyConverter({ total }) {
  const [conversionRate, setConversionRate] = useState(1);
  const [currency, setCurrency] = useState('USD');

  const handleConversion = () => {
    setConversionRate(currency === 'USD' ? 0.85 : 1.18); 
  };

  return (
    <div>
      <label>Selecciona la moneda:</label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <button onClick={handleConversion}>Convertir</button>
      <p>Total en {currency}: {(total * conversionRate).toFixed(2)}</p>
    </div>
  );
}


export default function Ejercicio3() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <>
      <h2>Registro de Gastos Diarios</h2>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <h2>Total: ${totalExpenses.toFixed(2)}</h2>
      <CurrencyConverter total={totalExpenses} />
    </>
  );
}