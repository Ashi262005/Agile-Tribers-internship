import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useCart } from '../Contexts/CartContext';

function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="navbar enhanced-navbar">
      <Link to="/" className="logo">EasyShop</Link>
      <div className="nav-links">
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button
          className="cart-icon"
          onClick={() => navigate('/cart')}
          aria-label="View cart"
        >
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;