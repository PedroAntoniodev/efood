import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Food } from "../../pages/Home";

type CartState = {
  items: Food[];
  isOpen: boolean;
  step: "cart" | "delivery" | "payment";
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: "cart",
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
    setStep: (
      state,
      action: PayloadAction<"cart" | "delivery" | "payment">
    ) => {
      state.step = action.payload;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, open, close, setStep, clear } = cartSlice.actions;
export default cartSlice.reducer;
