// src/App.jsx
import React, { useState, useRef } from 'react';
import './styles.css';

export default function Ejercicio5(){
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null); // Para mostrar la imagen cargada
  const [brightness, setBrightness] = useState(100);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const canvasRef = useRef(null);

  // Función para manejar la carga de imágenes
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      setImageSrc(e.target.result); // Mostrar la imagen seleccionada en pantalla
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        setImage(img);
        setWidth(img.width);
        setHeight(img.height);
      };
    };

    reader.readAsDataURL(file);
  };

  // Función para aplicar el brillo
  const applyBrightness = () => {
    if (!image) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.filter = `brightness(${brightness}%)`;
    ctx.drawImage(image, 0, 0, width, height);
  };

  // Maneja los cambios de tamaño
  const handleResize = () => {
    if (!image) return;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;

    applyBrightness();
  };

  return (
    <>
      <h2>Editor de Imágenes</h2>
      
      <input type="file" onChange={handleImageUpload} />
      
      {imageSrc && (
        <div>
          <h3>Imagen cargada:</h3>
          <img className='imgen' src={imageSrc} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          <canvas ref={canvasRef} style={{ maxWidth: '100%', maxHeight: '400px' }} />
          <div>
            <h4>Opciones de edición:</h4>
            
            {/* Opciones de tamaño */}
            <div>
              <label>Tamaño (Ancho: {width}px, Alto: {height}px)</label>
              <div>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  min="1"
                />
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  min="1"
                />
                <button onClick={handleResize}>Cambiar Tamaño</button>
              </div>
            </div>

            {/* Opciones de brillo */}
            <div>
              <label>Brillo: {brightness}%</label>
              <input
                type="range"
                min="0"
                max="200"
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
              />
              <button onClick={applyBrightness}>Aplicar Brillo</button>
            </div>
          </div>

          {/* Canvas para editar la imagen */}

        </div>
      )}
    </>
  );
}

