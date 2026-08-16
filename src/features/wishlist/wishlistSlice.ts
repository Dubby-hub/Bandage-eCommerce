import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "../../types/product";
import type { WishlistState } from "./types";

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const existingIndex = state.items.findIndex(
        (item) => item.id === product.id,
      );

      if (existingIndex !== -1) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(product);
      }
    },

    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { toggleWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
