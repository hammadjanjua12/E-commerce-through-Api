"use client"
import React, { useState } from 'react';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../Navbar/Navigation';
import ProductPage from '../ProductPage/ProductPage';
import DetailPage from '../DetailPage/DetailPage';
import Jewelry from '../Jewelry/Jewelry';
import CartPage from '../CartPage/CartPage';
import Footer from '@/Footer/Footer';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const AppRouter = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const handleCloseCart = () => {
    console.log('Closing the cart');
  };

  return (
    <Router>
      <NavBar cartCount={cart.length} />
      <Routes>
        <Route path="/jewelry" element={<Jewelry />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} onClose={handleCloseCart} />}
        />

        <Route
          path="/"
          element={<ProductPage setCart={setCart} />}
        />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
