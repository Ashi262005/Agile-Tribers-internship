import { useCart } from '../Contexts/CartContext';

export default function CartPage() {
  const { cartItems, loading, removeFromCart } = useCart();

  const cartTotal = cartItems.reduce((sum, item) => {
    const price = item?.price || 0;
    const quantity = item?.quantity || 0;
    return sum + price * quantity;
  }, 0);

  if (loading) return <div className="cart-loading">Loading cart...</div>;

  if (!cartItems.length)
    return (
      <div className="cart-page empty">
        <h2>Your cart is empty</h2>
        <p>Browse products and add them to your cart.</p>
      </div>
    );

  return (
    <>
      <div className='cart-page'>
        <h2>Your Cart</h2>
        {cartItems.map(item => (
          <div key={item.id} style={{ marginBottom: '20px' }}>
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
            )}
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
            <button
              className="remove"
              onClick={() => {
                if (item.id !== undefined) {
                  removeFromCart(item.id);
                } else {
                  console.error('Item id is undefined:', item);
                }
              }}
            >
              Remove from Cart
            </button>
            <button
              className="Purchase"
              onClick={() => {
                if (item.id !== undefined) {
                  // Update logic here
                } else {
                  console.error('Item id is undefined:', item);
                }
              }}
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </>
  );
}