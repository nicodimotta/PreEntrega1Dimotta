import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Aquí añadimos la función getTotalItems
    const getTotalItems = () => {
        return cart.length;
    };

    // Asegúrate de incluir getTotalItems en el valor del Provider
    return (
        <CartContext.Provider value={{ cart, addToCart, getTotalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};

