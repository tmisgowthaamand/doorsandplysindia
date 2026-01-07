import React from 'react';
import { ShoppingCart, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Button } from './Button';
import { useCartStore } from '../store/cart';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart
}) => {
  const { addToCart, getCartItem } = useCartStore();
  const cartItem = getCartItem(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(e);
    } else {
      addToCart(product, 1); // Default quantity to 1
      toast.success(`🛒 Added ${product.name} to cart`);
    }
  };

  return (
    <motion.div
      className="group relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Cart Quantity Indicator */}
      {cartItem && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            className="bg-[#4B3A2A] text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {cartItem.quantity} in cart
          </motion.div>
        </div>
      )}

      {/* Product Image Container */}
      <div className="relative h-72 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-100 to-gray-200">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Certifications Badge */}
        {product.certifications && product.certifications.length > 0 && (
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#4B3A2A] px-2 py-1 rounded-full text-xs font-medium shadow-md border border-white/50">
              <Award className="w-3 h-3 text-[#C3A572]" />
              {product.certifications[0]}
            </div>
          </div>
        )}

        {/* Floating Quick Add Button */}
        <Button
          variant="ghost"
          className="absolute top-3 right-3 p-2 rounded-full !bg-white/80 !backdrop-blur-sm hover:!bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          onClick={handleAddToCart}
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-5 h-5 text-[#4B3A2A]" />
        </Button>
      </div>

      {/* Product Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Top Content Area */}
        <div className="flex-1 space-y-4">
          {/* Category */}
          <div className="flex items-center">
            <span className="text-xs font-bold text-[#C3A572] uppercase tracking-wider">
              {product.category}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-xl font-bold text-[#4B3A2A] leading-tight tracking-tight line-clamp-2 group-hover:text-[#3A2A1A] transition-colors duration-300 min-h-[3rem]">
            {product.name}
          </h3>

          {/* Description */}
          {product.description && (
            <p className="text-[#4B3A2A]/70 text-sm leading-relaxed line-clamp-2 font-medium min-h-[2.5rem]">
              {product.description}
            </p>
          )}

          {/* Rating & Reviews */}
          {product.rating && (
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < product.rating!
                      ? 'text-[#C3A572] fill-current'
                      : 'text-gray-300'
                      }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#4B3A2A]/60 font-medium">
                ({product.reviewCount || 0} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Bottom Content Area (Pricing & CTA) */}
        <div className="mt-8 space-y-4">
          {/* Pricing Section */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#4B3A2A]">
                {product.price}
              </span>
              <span className="text-sm text-[#4B3A2A]/80 font-medium">
                (INR)
              </span>
            </div>
            {product.leadTime && (
              <div className="text-xs text-[#4B3A2A]/60 font-medium">
                Lead Time: {product.leadTime}
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              variant="default"
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold w-full hover:shadow-lg transition-all duration-300 !rounded-xl"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C3A572]/5 to-[#4B3A2A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};