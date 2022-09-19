import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action){
      let id;
      const f = state.cart.find((item, index) => {
        if(item.product._id?.$oid == action.payload?.product?._id?.$oid) {
          id = index;
          return true;
        } else{
          return false;
        }
      });
      if(!f) {
        state.cart.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
        return state;
      } else {
        state.cart[id].quantity += action.payload.quantity;
        return state;
      }
    },
    updateProduct(state, action){
      let id;
      const f = state.cart.find((item, index) => {
        if(item.product._id?.$oid == action.payload?.product?._id?.$oid) {
          id = index;
          return true;
        } else{
          return false;
        }
      });
      if (!f) {
        throw new Error('Not found that product');
      } else {
        state.cart[id].quantity = action.payload.quantity;
        return state;
      }
    },
    deleteProductFromCart(state, action){
      state.cart = state.cart.filter(item => item.product._id.$oid!=action.payload.product._id.$oid);
      return state;
    }
  }
});

export const cartAddProduct = (product,quantity) => {
  try{
    return async (dispatch) => {
      dispatch(cartSlice.actions.addProductToCart({ product, quantity }));
    }
  } catch (error) {
    console.log('error cart add product: ', error);
    throw new Error(error);
  }
}

export const cartDeleteProduct = (product) => {
  return async (dispatch) => {
    return await dispatch(cartSlice.actions.deleteProductFromCart(product));
  }
}

export const cartActions = cartSlice.actions;
export default cartSlice;