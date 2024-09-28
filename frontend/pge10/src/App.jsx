import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Ejercicio1 from './components/ej1/Ejercicio1';
import Ejercicio2 from './components/ej2/Ejercicio2';
import Ejercicio3 from './components/ej3/Ejercicio3';
import Ejercicio4 from './components/ej4/Ejercicio4';
import Ejercicio5 from './components/ej5/Ejercicio5';
import Ejercicio6 from './components/ej6/Ejercicio6';
import Ejercicio7 from './components/ej7/Ejercicio7';
import Ejercicio8 from './components/ej8/Ejercicio8';
import Ejercicio9 from './components/ej9/Ejercicio9';
import Ejercicio10 from './components/ej10/Ejercicio10';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/ejercicio1" element={<Ejercicio1 />} />
      <Route path="/ejercicio2" element={<Ejercicio2 />} />
      <Route path="/ejercicio3" element={<Ejercicio3 />} />
      <Route path="/ejercicio4" element={<Ejercicio4 />} />
      <Route path="/ejercicio5" element={<Ejercicio5 />} />
      <Route path="/ejercicio6" element={<Ejercicio6 />} />
      <Route path="/ejercicio7" element={<Ejercicio7 />} />
      <Route path="/ejercicio8" element={<Ejercicio8 />} />
      <Route path="/ejercicio9" element={<Ejercicio9 />} />
      <Route path="/ejercicio10" element={<Ejercicio10 />} />
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
