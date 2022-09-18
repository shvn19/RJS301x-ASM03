import { createSlice } from "@reduxjs/toolkit";
import { Auth } from 'aws-amplify';

const initialState = {
  user: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin(state,action) {
      console.log('action: ', action);
      state.user = action.payload
    },
    signout(state) {

    },
    signup(state) {

    }
  }
});

export const userSignIn = (data) => {
  return async (dispatch) => {
    try {
      console.log('in signin: data ...', data);
      const res = await Auth.signIn(
        // 'shvn19@gmail.com',
        // 'ABCabc1!',
        data.email,
        data.password,
      );
      console.log('signin res: ', res);
      return await dispatch(authSlice.actions.signin(res));
    } catch (err) {
      console.log('signin error: ', err);
    }
  }
}

export const userSignOut = () => {

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
      console.log('signup res: ', res);
      // dispatch(authSlice.actions.signup(res));
    } catch (err) {
      console.log('signup error: ', err);
    }
  }
}

export const authActions = authSlice.actions;

export default authSlice;