export interface Product {
  id: string;
  name: string;
  price: string;
  description?: string;
  image: string; // Kept for backward compatibility
  images?: string[]; // New field for multiple images
  category: string;
  maxQty?: number;
  leadTime?: string;
  supplier?: string;
  certifications?: string[];
  specifications?: { label: string; value: string }[];
  features?: string[];
  rating?: number;
  reviewCount?: number;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  addedAt: Date;
}