import React from 'react';
import products from './products';

const Shop = () => {
  return (
    <div style={{ backgroundColor: '#e6f0ff', minHeight: '100vh', padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'center'
        }}
      >
        {products.map(({ id, name, price, image }) => (
          <div
            key={id}
            style={{
              width: 220,
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 10,
              backgroundColor: '#fff', // white card background
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={image}
              alt={name}
              style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8 }}
            />
            <h3 style={{ fontSize: 16, margin: '10px 0 5px' }}>{name}</h3>
            <p style={{ margin: 0, fontWeight: 'bold' }}>${price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
