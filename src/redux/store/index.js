import { combineReducers, configureStore, createSlice, createStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";

import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  //only have 1 reducer, can add more reducers follow below pattern
  products: productsSlice.reducer,
})

const pReducer = persistReducer(persistConfig, rootReducer);
// configureStore giống createStore nhưng có thể kết hợp nhiều reducer vào một store
// const store = createStore(productsSlice.reducer);
// const store = configureStore({
//   reducer:{
//     products: productsSlice.reducer
//   }
// });

export const store = configureStore({
  reducer: pReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export const persistor = persistStore(store);
