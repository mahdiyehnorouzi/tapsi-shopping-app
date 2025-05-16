import React, { useState } from 'react';
import { Plus } from 'lucide-react';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
  onAdd: () => void;
};

const ProductCard = ({ product, onAdd }: ProductCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transform transition duration-200 hover:shadow-md">
      <div className="flex p-3">
        <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 relative">
          {!isImageLoaded && !isImageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
            </div>
          )}
            <img
                src={isImageError ? 'https://placehold.co/100x100?text=No+Image&font=roboto' : product.image}
              alt={product.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setIsImageError(true)}
            />
        </div>
        <div className="ml-3 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.title}</h3>
            <p className="mt-1 text-sm font-bold text-gray-900">${product.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={onAdd}
              className="flex items-center space-x-1 px-3 py-1.5 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
            >
              <Plus size={16} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;