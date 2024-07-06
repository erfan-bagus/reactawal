import { configureStore } from "@reduxjs/toolkit";
import shopping_cart from "./shopping_cart";

export const store = configureStore({
  reducer:{
    shopping_cart:shopping_cart
  },
  devTools:true
})