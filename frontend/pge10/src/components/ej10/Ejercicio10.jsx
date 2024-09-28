import React, { useState } from "react";
import './styles.css';

export default function Ejercicio10() {
  // Definimos las unidades de medida
  const units = {
    Longitud: ["Metros", "Kilómetros", "Centímetros"],
    Peso: ["Gramos", "Kilogramos"],
  };

  const conversionRates = {
    Metros: { Kilómetros: 0.001, Centímetros: 100 },
    Kilómetros: { Metros: 1000, Centímetros: 100000 },
    Centímetros: { Metros: 0.01, Kilómetros: 0.00001 },
    Gramos: { Kilogramos: 0.001 },
    Kilogramos: { Gramos: 1000 },
  };

  const [value, setValue] = useState(""); // Valor a convertir
  const [unitType, setUnitType] = useState("Longitud"); // Tipo de unidad seleccionada
  const [fromUnit, setFromUnit] = useState("Metros"); // Unidad de origen
  const [toUnit, setToUnit] = useState("Kilómetros"); // Unidad de destino
  const [result, setResult] = useState(null); // Resultado de la conversión
  const [error, setError] = useState(""); // Mensaje de error

  // Función para realizar la conversión
  const handleConversion = () => {
    setError(""); // Limpiar errores previos
    setResult(null); // Limpiar resultado previo

    if (value === "" || isNaN(value)) {
      setError("Por favor, ingresa un número válido.");
      return;
    }

    if (parseFloat(value) < 0) {
      setError("No se permiten números negativos.");
      return;
    }

    if (fromUnit === toUnit) {
      setResult(value); // No hay conversión si las unidades son iguales
    } else {
      const rate = conversionRates[fromUnit]?.[toUnit]; // Tomamos la tasa de conversión

      if (rate) {
        setResult(parseFloat(value) * rate);
      } else {
        setError(`La conversión de ${fromUnit} a ${toUnit} no es válida.`);
      }
    }
  };

  return (
    <>
    <h2>Conversor de Unidades</h2>
    <div className="appcontainer">


      {/* Campo para ingresar el valor */}
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ingresa el valor"
      />

      {/* ComboBox para seleccionar el tipo de unidad */}
      <select
        value={unitType}
        onChange={(e) => {
          setUnitType(e.target.value);
          setFromUnit(units[e.target.value][0]);
          setToUnit(units[e.target.value][1]);
        }}
      >
        {Object.keys(units).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* ComboBox para seleccionar la unidad de origen */}
      <select
        value={fromUnit}
        onChange={(e) => setFromUnit(e.target.value)}
      >
        {units[unitType].map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <p>a</p>
      {/* ComboBox para seleccionar la unidad de destino */}
      <select
        value={toUnit}
        onChange={(e) => setToUnit(e.target.value)}
      >
        {units[unitType].map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>

      {/* Botón para realizar la conversión */}
      <button onClick={handleConversion}>Convertir</button>

      {/* Mensaje de error */}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {/* Label para mostrar el resultado */}
      {result !== null && !error && <h3>Resultado: {result}</h3>}
    </div>
    </>
  );
}

