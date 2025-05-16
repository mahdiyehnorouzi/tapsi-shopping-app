import React, { useState } from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';

type CartItemProps = {
  item: CartItemType;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
};

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);
  
  const { product, quantity } = item;
  const totalPrice = product.price * quantity;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden p-3">
      <div className="flex items-start">
        <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 relative">
          {!isImageLoaded && !isImageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
            </div>
          )}
          {isImageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
              <span className="text-xs text-center px-1">No Image</span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setIsImageError(true)}
            />
          )}
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.title}</h3>
          <div className="mt-1 flex justify-between">
            <span className="text-xs text-gray-500">Unit: ${product.price.toFixed(2)}</span>
            <span className="text-sm font-bold">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="mt-2 flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => quantity > 1 && onUpdateQuantity(quantity - 1)}
                className={`h-9 px-2 rounded-l-md border border-r-0 border-gray-300 ${
                  quantity <= 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-50'
                }`}
                disabled={quantity <= 1}
              >
                <Minus size={14} />
              </button>
              <div className="w-8 flex justify-center items-center border-t border-b border-gray-300 h-9">
                <span className="text-sm">{quantity}</span>
              </div>
              <button
                onClick={() => onUpdateQuantity(quantity + 1)}
                className="h-9 px-2 rounded-r-md border border-l-0 border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              onClick={onRemove}
              className="text-gray-400 hover:text-red-500 transition-colors p-1.5"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;