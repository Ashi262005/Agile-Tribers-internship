// filepath: src/Api.jsx
import axios from 'axios';
const API_BASE = "http://localhost:3001";
let cart = [];
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE}/products`);
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
};
export const getCartItems = async () => {
  const response = await fetch("http://localhost:3001/cart");
  if (!response.ok) throw new Error('Network error');
  return await response.json();
};

export const addToCart = async (item) => {
  const response = await axios.post(`${API_BASE}/cart`, item);
  return response.data;
};

export const updateCartItem = async (id, updates) => {
  const response = await axios.patch(`${API_BASE}/cart/${id}`, updates);
  return response.data;
};

export const removeFromCart = async (id) => {
  const response = await fetch(`http://localhost:3001/cart/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to remove item');
  return true;
};