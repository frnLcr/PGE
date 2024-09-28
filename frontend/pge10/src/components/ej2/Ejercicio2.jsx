import { useRef, useState } from 'react';
import './styles.css';

export default function Ejercicio2() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [lineColor, setLineColor] = useState('black');
  const [lineWidth, setLineWidth] = useState(2);
  const [isErasing, setIsErasing] = useState(false);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (isErasing){
        ctx.strokeStyle = 'White';
        ctx.lineWidth = 20;
    } else {
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
    }

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    setContext(ctx);

    ctx.beginPath();
    ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;

    context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    context.closePath();
  };

  return (
    <div>
      <div> 
      <h2 className='h2ej2'>Dibujar en el Canvas</h2>
      <canvas className="canvas"
        id="drawingCanvas"
        width="800"
        height="600"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      ></canvas>
      </div>
      <div>
      <label>Color de la línea: </label>
      <select onChange={(e) => setLineColor(e.target.value)}>
        <option value="black">Negro</option>
        <option value="red">Rojo</option>
        <option value="blue">Azul</option>
      </select>

      <label>Grosor: </label>
      <input
        type="range"
        min="1"
        max="10"
        value={lineWidth}
        onChange={(e) => setLineWidth(e.target.value)}
      />
      <button onClick={() => setIsErasing(!isErasing)}>
        {isErasing ? "Dibujar" : "Borrar"}
      </button>
      </div>
    </div>
  );
}

