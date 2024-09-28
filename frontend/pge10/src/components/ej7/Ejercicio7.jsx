import { useState } from 'react';


export default function Ejercicio7() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  // Función para manejar los cambios en la entrada del usuario
  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  // Función para manejar el envío de la suposición
  const handleGuessSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage('Por favor ingresa un número válido.');
      return;
    }

    setAttempts(attempts + 1); // Incrementar el número de intentos

    if (userGuess < targetNumber) {
      setMessage('Demasiado bajo. Intenta nuevamente.');
    } else if (userGuess > targetNumber) {
      setMessage('Demasiado alto. Intenta nuevamente.');
    } else {
      setMessage(`¡Felicidades! Adivinaste el número en ${attempts + 1} intentos.`);
    }
  };

  // Función para reiniciar el juego
  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div className="App">
      <h2>Juego de Adivinanza</h2>
      <p>Adivina un número entre 1 y 100</p>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          placeholder="Ingresa tu suposición"
          className="input-guess"
        />
        <button type="submit" className="btn-submit">Adivinar</button>
      </form>
      {message && <p className="message">{message}</p>}
      {message.startsWith('¡Felicidades!') && (
        <button onClick={resetGame} className="btn-reset">
          Reiniciar Juego
        </button>
      )}
    </div>
  );
}


