import React, { useState } from 'react';
import './styles.css';

export default function Ejercicio1() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState(null);
    const [error, setError] = useState(null);

    const handleConvert = async () => {
        try {
            const response = await fetch('http://localhost:3000/convert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ celsius }),
            });
            const data = await response.json();
            if (response.ok) {
                setFahrenheit(data.fahrenheit);
                setError(null);
            } else {
                setError(data.error);
                setFahrenheit(null);
            }
        } catch (err) {
            setError('Error al conectar con el servidor');
        }
    };

    return (
        <div >
            <h2>Convertir Celsius a Fahrenheit</h2>
            <input className="button-container"
                type="text"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
                placeholder="Ingresa grados Celsius"
            />
            <button onClick={handleConvert}>Convertir</button>
            {fahrenheit !== null && (
                <p>Resultado: {fahrenheit} °F</p>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};