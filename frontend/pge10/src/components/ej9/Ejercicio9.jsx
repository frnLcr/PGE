import React, { useState } from 'react';
import './styles.css';

export default function Ejercicio9() {
  const [fileContent, setFileContent] = useState('');
  const [fontSize, setFontSize] = useState(16);

  // Handler para cargar el archivo
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      setFileContent(e.target.result);
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  // Handler para ajustar el tamaño de la fuente
  const handleFontSizeChange = (sizeChange) => {
    setFontSize(prevSize => prevSize + sizeChange);
  };


      // Handler para resetear la pantalla
    const handleReset = () => {
        setFileContent('');  // Limpiar el contenido del archivo
        setFontSize(16);     // Resetear el tamaño de la fuente
        document.querySelector('input[type="file"]').value = '';  // Limpiar el input file
      };

      return (
        <div className="container">
          <h2>Previsualizador de Archivos de Texto</h2>
          <input type="file" accept=".txt" onChange={handleFileUpload} />
          <div>
            <button className="button-container" onClick={() => handleFontSizeChange(-2)}>Disminuir Tamaño</button>
            <button className="button-container" onClick={() => handleFontSizeChange(2)}>Aumentar Tamaño</button>
          </div>
          <div className="file-preview" style={{ fontSize: `${fontSize}px` }}>
            {fileContent}
          </div>
      <div className="button-container">
        <button onClick={handleReset}>Clear</button>
      </div>
    </div>
  );
};

