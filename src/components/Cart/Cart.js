import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useCart();

    return (
        <div>
            <h2>Tu carrito</h2>
            {cart.map((item, index) => {
                if (!item.product) {
                    console.error("Ítem problemático:", item);
                    return null;  // Retorna 'null' para este ítem y sigue con el siguiente
                }

                return (
                    <div key={item.product.id}>
                        <img src={item.product.image} alt={item.product.name} width="50" />
                        <span>{item.product.name}</span>
                        <span>{item.product.price}</span>
                        <span>Cantidad: {item.quantity}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Cart;
