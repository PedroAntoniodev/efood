import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Food } from "../../pages/Home";

type CartState = {
  items: Food[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Food>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (!item) {
        state.items.push(action.payload);
      } else {
        alert("Item já adicionado ao carrinho");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, remove, open, close } = cartSlice.actions;
export default cartSlice.reducer;
