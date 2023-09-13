import React from 'react';

const ItemDetail = ({ product }) => {
    return (
      <div>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        {/* Puedes agregar más detalles aquí si lo deseas */}
      </div>
    );
  }
  

export default ItemDetail;