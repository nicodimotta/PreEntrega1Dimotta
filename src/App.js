import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetail from './components/ItemDetail/ItemDetail';
import products from './data/products'; 
import { CartProvider } from './context/CartContext';
import './App.css';

const Inicio = () => <div>Inicio</div>;
const Contacto = () => <div>Contacto</div>;

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(prod => prod.id === Number(productId));

  // Verifica si el producto existe
  if (!product) return <div>Producto no encontrado</div>;

  return <ItemDetail product={product} />;
}

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/control" element={<ItemListContainer category="control" />} />
            <Route path="/hibridos" element={<ItemListContainer category="hibridos" />} />
            <Route path="/speed" element={<ItemListContainer category="speed" />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/producto/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;


