import * as api from '../Api.jsx';
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const items = await api.getCartItems();
        setCartItems(items);
      } catch (e) {
        setCartItems([]);
      }
      setLoading(false);
    };
    fetchCart();
  }, []);

const addToCart = async (product) => {
  const addedItem = await api.addToCart(product);
  setCartItems((prev) => [...prev, addedItem]);
};

 const removeFromCart = async (id) => {
  await api.removeFromCart(id);
  setCartItems((prev) => prev.filter(item => item.id !== id));
};

  const value = {
    cartItems,
    loading,
    addToCart,
    removeFromCart,
    cartTotal: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}