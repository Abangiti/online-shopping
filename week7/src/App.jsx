
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Product from './product';
import Navigation from './header';
const App = () => {
  
  return (
    <BrowserRouter>
    <Navigation/>
    
 <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/ring" element={<Product />} />
        {/* <Cart cartItems={cartItems} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
