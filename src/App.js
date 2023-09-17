// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch
import Menupage from './pages/Menupage';
import ProductDetail from './ProductDetail';
import './App.css' // Import the ProductDetail component
import ProductPage from './components/ProductPage';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Menupage />} /> {/* Use element prop */}
        <Route path="/all-product" element={<ProductPage />} /> {/* Use element prop */}
        <Route path="/product-detail/:id" element={<ProductDetail  />} /> {/* Use element prop */}
        
      </Routes>
    </Router>
  );
};

export default App;
