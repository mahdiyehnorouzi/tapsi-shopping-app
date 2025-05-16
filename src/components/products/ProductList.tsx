import React from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';

type Props = {
    products: Product[];
};

const ProductList = ({ products }: Props) => {
    const { addToCart, removeProduct } = useCart();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={() => addToCart(product)}
                    onRemove={() => removeProduct(product.id)}
                />
            ))}
        </div>
    );
};

export default ProductList;
