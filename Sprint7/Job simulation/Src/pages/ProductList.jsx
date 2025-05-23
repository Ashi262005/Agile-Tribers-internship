// src/pages/ProductList.jsx
import { useCart } from '../Contexts/CartContext';
import { useEffect, useState } from 'react';
import { getProducts } from '../Api.jsx';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        if (data.length === 0) {
          setError('No products found');
        }
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;
  if (products.length === 0) return <div>No products available</div>;
return (
  <>
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img className='images' src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </>
);

}
