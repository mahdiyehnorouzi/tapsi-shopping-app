import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ShoppingList from './pages/ShoppingList';
import ShoppingCart from './pages/ShoppingCart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<ShoppingList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;