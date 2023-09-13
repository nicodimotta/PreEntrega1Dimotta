import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products';
import { useCart } from '../../context/CartContext';

const ItemListContainer = ({ category }) => {
    const { addToCart } = useCart();  // <-- Añade esta línea
    const filteredProducts = products.filter(product => product.category === category);

    return (
        <div className="container">
            <h2 className="mb-4">Lista de Items - {category}</h2>
            <div className="row">
                {filteredProducts.map(product => (
                    <div className="col-md-4 mb-3" key={product.id}>
                        <div className="card">
                            <img src={product.image} alt={product.name} className="card-img-top" style={{maxHeight: '200px', objectFit: 'cover'}}/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/producto/${product.id}`} className="btn btn-dark">
                                        {product.name}
                                    </Link>
                                </h5>
                                <p className="card-text">Precio: ${product.price}</p>
                                <p className="card-text">Stock: {product.stock}</p>
                                <button onClick={() => addToCart(product)} className="btn btn-primary">Agregar al carrito</button> {/* Añade este botón */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;





