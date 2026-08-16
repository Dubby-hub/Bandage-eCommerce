export interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  hoverImage: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
  isOutOfStock?: boolean;
}
