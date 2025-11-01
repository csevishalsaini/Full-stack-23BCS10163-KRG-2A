import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'url(https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1470&q=80) no-repeat center/cover',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '0 20px',
          boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.4)'
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          Discover Your Style
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px' }}>
          Shop the latest trends in clothing and accessories. Quality fashion just a click away.
        </p>
        <a
          href="/shop"
          style={{
            backgroundColor: '#ff6f61',
            padding: '15px 40px',
            borderRadius: '30px',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 4px 12px rgba(255,111,97,0.6)',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e65b50')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ff6f61')}
        >
          Shop Now
        </a>
      </section>

      {/* Featured Categories */}
      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: 'auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>
          Featured Categories
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {[
            {
              title: 'Men',
              image:
                'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Women',
              image:
                'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Kids',
              image:
                'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
            }
          ].map(({ title, image }) => (
            <div
              key={title}
              style={{
                width: 280,
                borderRadius: 10,
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                textAlign: 'center'
              }}
              onClick={() => window.location.assign('/shop')}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={image}
                alt={title}
                style={{ width: '100%', height: 180, objectFit: 'cover' }}
              />
              <h3 style={{ margin: '15px 0', fontWeight: 'bold', fontSize: '1.3rem' }}>{title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
