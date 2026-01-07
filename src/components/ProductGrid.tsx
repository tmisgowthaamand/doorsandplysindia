import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { ProductSkeleton } from './ProductSkeleton';
import { products } from '../data/products';
import { Product } from '../types/product';

interface ProductGridProps {
  loading?: boolean;
  onProductClick?: (productId: string) => void;
  filteredProducts?: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  loading = false,
  onProductClick,
  filteredProducts
}) => {
  const productsToShow = filteredProducts || products;

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {productsToShow.map((product) => (
        <div
          key={product.id}
          className="h-full flex flex-col cursor-pointer"
          onClick={() => onProductClick?.(product.id)}
        >
          <ProductCard
            product={product}
            onAddToCart={(e) => {
              e.stopPropagation();
              onProductClick?.(product.id);
            }}
          />
        </div>
      ))}
    </motion.div>
  );
};