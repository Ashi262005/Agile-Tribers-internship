import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { addToCart } from '../Api';

function ProductCard({ product }) {
  const [isAdding, setIsAdding] = useState(false);
  const { refreshCart } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await addToCart(product);
      refreshCart();
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <button 
          onClick={handleAddToCart} 
          disabled={isAdding}
          className="add-to-cart"
        >
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;