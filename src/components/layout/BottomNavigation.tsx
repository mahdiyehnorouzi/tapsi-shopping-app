import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const BottomNavigation = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-200 py-2">
      <div className="flex justify-around items-center">
        <Link
          to="/"
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            location.pathname === '/' ? 'text-black' : 'text-gray-500'
          }`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/cart"
          className={`flex flex-col items-center p-2 rounded-lg transition-colors relative ${
            location.pathname === '/cart' ? 'text-black' : 'text-gray-500'
          }`}
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="text-xs mt-1">Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;