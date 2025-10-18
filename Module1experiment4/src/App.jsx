import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';    // your Home component
import Shop from './Shop';    // your Shop component
import Navbar from './Navbar';  // your Navbar component
 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />        {/* Default home page */}
        <Route path="/shop" element={<Shop />} />    {/* Shop page */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

