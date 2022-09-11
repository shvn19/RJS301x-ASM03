import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsList: [],
  filteredProducts: [],
  productModal: null,
  showModal: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts(state) {
      console.log('state products: ', state.productsList);
      state.productsList.push(1);
    },
    updateProductsList(state, action) {
      state.productsList = [...action.payload];
    },
    setProductModal(state, action) {
      state.productModal = { ...action.payload };
    },
    showPopup(state) {
      state.showModal = true;
    },
    hidePopUp(state) {
      state.showModal = false;
    },
    getAllFilterProducts(state, action){
      state.filteredProducts = [ ...action.payload ];
    },
    getFilterProductsIphone(state, action){
      console.log('productList: ', state.productsList);
      state.filteredProducts = state.productsList.filter(prod => prod.category.toLowerCase()==='iphone');
    },
    getFilterProductsByName(state, action){
      state.filteredProducts = state.productsList.filter(prod => prod.name.toLowerCase().includes(action.payload.toLowerCase()));
    }
  }
});


export const getAllProductsFunc = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
      const data = await res.json();
      dispatch(productsSlice.actions.updateProductsList(data));
    } catch (error) {
      alert('has error fetching.');
    }
  }
}

export const setProduct = (product) => {
  return (dispatch) => {
    return dispatch(productsSlice.actions.setProductModal(product));
  }
}

export const showModalProduct = () => {
  return (dispatch) => {
    return dispatch(productsSlice.actions.showPopup());
  }
}

export const hideModalProduct = () => {
  return (dispatch) => {
    return dispatch(productsSlice.actions.hidePopUp());
  }
}

export const getAllFileredProducts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
      const data = await res.json();
      dispatch(productsSlice.actions.getAllFilterProducts(data));
    } catch (error) {
      alert('has error fetching.');
    }
  }
}

export const getFileredProductsIphone = () => {
  return async (dispatch, getState) => {
    const { productsList } = getState().products;
    console.log('prdlist: ', productsList);
    if(productsList.length==0) {
      await dispatch(getAllProductsFunc());
    }
    return dispatch(productsSlice.actions.getFilterProductsIphone());
  }
}

export const productsActions = productsSlice.actions;

export default productsSlice;