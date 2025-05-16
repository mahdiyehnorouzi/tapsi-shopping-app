export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};
