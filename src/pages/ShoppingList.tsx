import React, { useState, Suspense, lazy } from 'react';
import Layout from '../components/layout/Layout';
import { products } from '../data/products';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useIsDesktop } from '../hooks/useIsDesktop';

const ProductList = lazy(() => import('../components/products/ProductList'));

const ShoppingList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebouncedValue(searchTerm, 400);
  const isDesktop = useIsDesktop();

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const visibleCount = useInfiniteScroll(
    filteredProducts.length,
    isDesktop ? 20 : 10,
    600,
    isDesktop ? 1000 : 100
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <Layout title="Shopping List" searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
      <div className="pb-16">
        {filteredProducts.length > 0 ? (
          <>
            <Suspense fallback={<p className="px-4 pt-4 text-gray-500">Loading products...</p>}>
              <ProductList products={visibleProducts} />
            </Suspense>

            {visibleProducts.length < filteredProducts.length && (
              <div className="flex justify-center py-4">
                <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-60 px-4 text-center">
            <p className="text-lg text-gray-600">No products found</p>
            <p className="text-sm text-gray-500">Try a different search term</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ShoppingList;
