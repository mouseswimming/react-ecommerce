import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, CartProduct } from "../types";

type InitialState = {
  cartProducts: CartProduct[];
};

const initialState: InitialState = {
  cartProducts: [],
};

const findProduct = (productId: number, products: CartProduct[]) => {
  return products.find((product) => product.id === productId);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = findProduct(action.payload.id, state.cartProducts);

      if (product) {
        state.cartProducts = state.cartProducts.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      } else {
        state.cartProducts = [
          ...state.cartProducts,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = findProduct(action.payload, state.cartProducts);

      if (product?.quantity === 1) {
        // remove the product if only buy 1
        state.cartProducts = state.cartProducts.filter(
          (cardProduct) => cardProduct.id !== product.id
        );
      } else {
        state.cartProducts = state.cartProducts.map((cardProduct) => {
          if (cardProduct.id === action.payload) {
            return { ...cardProduct, quantity: cardProduct.quantity - 1 };
          } else {
            return cardProduct;
          }
        });
      }
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export default cartSlice;
export const { addToCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
