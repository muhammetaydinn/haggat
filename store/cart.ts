import { IProduct } from "@/models/product.model";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CartItem = {
  product: IProduct;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
  selectedCategoryId: number;
  setSelectedCategoryId: (categoryId: number) => void;
  clearCart: () => void;
};

const initialState: CartStore = {
  cart: [],
  selectedCategoryId: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  setSelectedCategoryId: () => {},
  clearCart: () => {},
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        addToCart: (product) => {
          set((state) => {
            const existingItemIndex = state.cart.findIndex(
              (item) => item.product.id === product.id
            );

            if (existingItemIndex !== -1) {
              state.cart[existingItemIndex].quantity += 1;
            } else {
              state.cart.push({ product, quantity: 1 });
            }

            return { cart: [...state.cart] };
          });
        },
        removeFromCart: (productId) => {
          set((state) => {
            const updatedCart = state.cart.filter(
              (item) => item.product.id !== productId
            );
            return { cart: updatedCart };
          });
        },
        clearCart: () => {
          set({ cart: [] });
        },
        updateCartItemQuantity: (productId, quantity) => {
          set((state) => {
            const updatedCart = state.cart.map((item) => {
              if (item.product.id === productId) {
                return { ...item, quantity };
              }
              return item;
            });
            return { cart: updatedCart };
          });
        },
        setSelectedCategoryId: (categoryId) => {
          set({ selectedCategoryId: categoryId });
        },
      }),
      { name: "localCartData" }
    )
  )
);
