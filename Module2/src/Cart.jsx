import React from 'react';

const Cart = () => {
  // Dummy cart items for demo (replace with your state or context) 
  const cartItems = [
    { id: 1, name: 'Cool Sneakers', price: 79.99, quantity: 2, image: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Stylish Jacket', price: 149.99, quantity: 1, image: 'https://via.placeholder.com/80' },
  ];

  const containerStyle = {
    maxWidth: '900px',
    margin: '3rem auto',
    padding: '0 1rem',
    fontFamily: "'Poppins', sans-serif",
    color: '#333',
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    borderRadius: '12px',
    background: '#fff',
  };

  const imgStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '10px',
    objectFit: 'cover',
    marginRight: '1.5rem',
  };

  const detailsStyle = {
    flex: 1,
  };

  const nameStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.3rem',
  };

  const priceQtyStyle = {
    color: '#666',
    fontSize: '1rem',
  };

  const priceStyle = {
    fontWeight: '700',
    fontSize: '1.1rem',
    color: '#2563eb', // blue accent color
  };

  const summaryStyle = {
    textAlign: 'right',
    marginTop: '2rem',
    fontSize: '1.3rem',
    fontWeight: '700',
  };

  const checkoutButtonStyle = {
    marginTop: '1.5rem',
    padding: '0.8rem 2.5rem',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '1.1rem',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(37, 99, 235, 0.5)',
    transition: 'background-color 0.3s ease',
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>Your cart is empty.</p>
      ) : (
        <>
          <ul style={listStyle}>
            {cartItems.map(({ id, name, price, quantity, image }) => (
              <li key={id} style={itemStyle}>
                <img src={image} alt={name} style={imgStyle} />
                <div style={detailsStyle}>
                  <div style={nameStyle}>{name}</div>
                  <div style={priceQtyStyle}>
                    Quantity: <strong>{quantity}</strong>
                  </div>
                </div>
                <div style={priceStyle}>${(price * quantity).toFixed(2)}</div>
              </li>
            ))}
          </ul>

          <div style={summaryStyle}>
            Total: ${totalPrice}
            <br />
            <button
              style={checkoutButtonStyle}
              onClick={() => alert('Checkout is coming soon!')}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

