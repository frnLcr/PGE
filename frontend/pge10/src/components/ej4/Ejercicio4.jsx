import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import './styles.css';

export default function Ejercicio10() {

  const salesData = {
    Enero: 2000,
    Febrero: 1900,
    Marzo: 800,
    Abril: 1500,
    Mayo: 2000,
    Junio: 500,
    Julio: 300,
    Agosto: 1850,
    Septiembre: 100,
    Octubre: 1500,
    Noviembre: 1200,
    Diciembre: 500,
  };

  const months = Object.keys(salesData);
  const [selectedMonth, setSelectedMonth] = useState("Enero");
  const [chartData, setChartData] = useState([
    { name: "Enero", sales: salesData["Enero"] },
  ]);

  const handleGenerateChart = () => {
    setChartData([{ name: selectedMonth, sales: salesData[selectedMonth] }]);
  };

  return (
    <>
      <div className="app-container">
        <h2>Datos de Ventas Mensuales</h2>

        <div className="control-panel">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>

          <button onClick={handleGenerateChart}>Generar Gráfico</button>
        </div>

        <BarChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </div>
    </>
  );
}

