import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const cartItemCount = 2;

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const linkStyle = {
    textDecoration: 'none',
    color: '#374151', // dark gray
    fontWeight: '500',
    fontSize: '16px',
    padding: '10px 15px',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease',
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Header above navbar */}
      <div
        style={{
          backgroundColor: '#2563eb', // nice blue
          color: 'white',
          padding: '20px 0',
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: '700',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          userSelect: 'none',
        }}
      >
        ShopEase
      </div>

      {/* Navbar */}
      <nav
        style={{
          background: '#f9fafb', // light gray background
          padding: '12px 24px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* Left placeholder to balance cart icon */}
          <div style={{ width: 40 }}></div>

          {/* Links or mobile hamburger */}
          {isMobile ? (
            <>
              {/* Hamburger icon */}
              <div
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#374151',
                }}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </div>

              {/* Mobile menu */}
              {isMobileMenuOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '56px',
                    left: 0,
                    width: '100%',
                    background: '#f9fafb',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px 0',
                    gap: '15px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    borderTop: '1px solid #e5e7eb',
                  }}
                >
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      style={{
                        ...linkStyle,
                        width: '90%',
                        textAlign: 'center',
                        borderRadius: '8px',
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = '#e0e7ff')
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = 'transparent')
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            // Desktop links - centered with flex: 1 for proper alignment
            <div
              style={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={linkStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = '#e0e7ff')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = 'transparent')
                  }
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* Cart icon on the right */}
          <a
            href="/cart"
            style={{
              position: 'relative',
              fontSize: '22px',
              color: '#374151',
              textDecoration: 'none',
              width: 40,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            aria-label="Cart"
          >
            <FaShoppingCart />
            <span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-10px',
                background: 'red',
                color: '#fff',
                borderRadius: '50%',
                fontSize: '12px',
                padding: '2px 6px',
                fontWeight: '700',
              }}
            >
              {cartItemCount}
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
