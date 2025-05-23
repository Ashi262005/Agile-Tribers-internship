import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { updateCartItem, removeFromCart } from '../Api';

function CartItem({ item }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: item.name,
    price: item.price,
    quantity: item.quantity
  });
  const { refreshCart } = useCart();

  const handleUpdate = async () => {
    try {
      await updateCartItem(item.id, editData);
      refreshCart();
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await removeFromCart(item.id);
      refreshCart();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = editData.quantity + change;
    if (newQuantity > 0) {
      setEditData(prev => ({
        ...prev,
        quantity: newQuantity
      }));
    }
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
            />
            <input
              type="number"
              value={editData.price}
              onChange={(e) => setEditData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
              step="0.01"
            />
          </>
        ) : (
          <>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </>
        )}
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{editData.quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <div className="item-subtotal">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
      <div className="item-actions">
        {isEditing ? (
          <>
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;