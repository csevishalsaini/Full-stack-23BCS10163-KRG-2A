import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';          // Your Home component
import Shop from './Shop';          // Your Shop component
import About from './About';        // Your About component
import Contact from './Contact';    // Your Contact component
import Cart from './Cart';          // Your Cart component
import Navbar from './Navbar';      // Your Navbar component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />             {/* Default home page */}
        <Route path="/shop" element={<Shop />} />         {/* Shop page */}
        <Route path="/about" element={<About />} />       {/* About page */}
        <Route path="/contact" element={<Contact />} />   {/* Contact page */}
        <Route path="/cart" element={<Cart />} />         {/* Cart page */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
