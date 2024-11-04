import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  
  setCart: (data) => set({ cart: data }),

  addToCart: (item) => set((state) => {  
    const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      return {
        cart: state.cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    } else {
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }
  }),
  removeFromCart: (itemId) => set((state) => ({
    cart: state.cart
      .map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0),
  })),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
