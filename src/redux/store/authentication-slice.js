import { createSlice } from "@reduxjs/toolkit";
import { Auth } from 'aws-amplify';

const initialState = {
  activeUser: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin(state,action) {
      const { sub, email, name, phone } = action.payload.attributes;
      state.activeUser = {
        sub,
        email,
        name,
        phone,
      };
    },
    signout(state) {
      state.activeUser={};
    },
    signup(state) {

    }
  }
});

export const userSignIn = (data) => {
  return async (dispatch) => {
    try {
      const res = await Auth.signIn(
        data.email,
        data.password,
      );
      dispatch(authSlice.actions.signin(res));
    } catch (err) {
      console.log('signin error: ', err);
    }
  }
}

export const userSignOut = () => {
  return async (dispatch) => {
    try {
      const res = await Auth.signOut();
      dispatch(authSlice.actions.signout())
    } catch (err) {
      console.log('error signout: ', err);
    }
  }
}

export const userSignUp = (data) => {
  return async (dispatch) => {
    try {
      const res = await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          email: data.email,
          name: data.fullName,
          phone_number: data.phone,
        }
      });
      // dispatch(authSlice.actions.signup(res));
    } catch (err) {
      console.log('signup error: ', err);
    }
  }
}

export const authActions = authSlice.actions;

export default authSlice;