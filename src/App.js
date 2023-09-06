import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import './App.css';

// Estas son las páginas "placeholder" que mostrarán un simple texto
const Inicio = () => <div>Inicio</div>;
const Control = () => <div>Control</div>;
const Hibridos = () => <div>Híbridos</div>;
const Speed = () => <div>Speed</div>;
const Contacto = () => <div>Contacto</div>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<><Inicio /><ItemListContainer /></>} />
          <Route path="/control" element={<Control />} />
          <Route path="/hibridos" element={<Hibridos />} />
          <Route path="/speed" element={<Speed />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
