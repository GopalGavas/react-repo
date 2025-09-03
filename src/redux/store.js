import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    cart: cartReducer,
  },
});
