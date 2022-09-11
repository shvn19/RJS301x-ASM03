import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";

// configureStore giống createStore nhưng có thể kết hợp nhiều reducer vào một store
// const store = createStore(productsSlice.reducer);
const store = configureStore({
  reducer:{
    products: productsSlice.reducer
  }
});

export default store;
