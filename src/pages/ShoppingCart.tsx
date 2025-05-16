import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import CartItem from '../components/products/CartItem';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const ShoppingCart = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {
        cart,
        updateQuantity,
        removeProduct,
        clearCart,
        getTotalItems,
        getTotalPrice
    } = useCart();

    const filteredCartItems = cart.filter(item =>
        item.product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const isCartEmpty = cart.length === 0;
    const isFilteredEmpty = filteredCartItems.length === 0 && !isCartEmpty;

    return (
        <Layout title="Shopping Cart" searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
            <div className="flex flex-col min-h-[calc(100vh-130px)]">
                {isCartEmpty ? (
                    <div className="flex-1 flex flex-col items-center justify-center h-60 px-4 text-center">
                        <p className="text-lg text-gray-600">Your cart is empty</p>
                        <p className="text-sm text-gray-500">Add some products to your cart</p>
                    </div>
                ) : isFilteredEmpty ? (
                    <div className="flex-1 flex flex-col items-center justify-center h-60 px-4 text-center">
                        <p className="text-lg text-gray-600">No matching items found</p>
                        <p className="text-sm text-gray-500">Try a different search term</p>
                    </div>
                ) : (
                    <div className="flex-1 space-y-4 px-4 py-4 pb-36">
                        {filteredCartItems.map((item) => (
                            <CartItem
                                key={item.product.id}
                                item={item}
                                onUpdateQuantity={(quantity) => updateQuantity(item.product.id, quantity)}
                                onRemove={() => removeProduct(item.product.id)}
                            />
                        ))}
                    </div>
                )}

                {!isCartEmpty && !isFilteredEmpty && (
                    <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg px-4 py-3 z-10">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Total Items:</span>
                            <span className="font-semibold">{getTotalItems()}</span>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm text-gray-600">Total Amount:</span>
                            <span className="font-semibold text-lg">${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <button
                            onClick={clearCart}
                            className="w-full flex items-center justify-center space-x-2 py-2 mb-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                            <Trash2 size={16} />
                            <span>Empty Cart</span>
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default ShoppingCart;
