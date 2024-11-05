import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  
  setCart: (data) => set({ cart: data }),
  
  updateQuantityInCart: (id, quantity) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    )
  })),

  addToCart: (item) => set((state) => { 
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
  }),
  removeFromCart: (itemId) => set((state) => ({
    cart: state.cart.filter((cartItem) => cartItem.id !== itemId) // Remove the item by ID
  })),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
