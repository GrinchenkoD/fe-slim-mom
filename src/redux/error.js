import { createReducer } from '@reduxjs/toolkit';
import auth from './auth/authActions';
import products from './products/productsActions';

const initialState = null;
const errorReducer = createReducer(initialState, {
  [auth.registerError]: (_, { payload }) => payload,
  [auth.logInError]: (_, { payload }) => payload,
  [auth.logOutError]: (_, { payload }) => payload,
  [auth.getCurrentUserError]: (_, { payload }) => payload,
  [products.addPoductError]: (_, { payload }) => payload,
  [products.searchPoductError]: (_, { payload }) => payload,
  [products.deleteProductError]: (_, { payload }) => payload,
  [products.dailyRatePrivateError]: (_, { payload }) => payload,
  [products.dailyRatePublicError]: (_, { payload }) => payload,
  [products.dayInfoError]: (_, { payload }) => payload,

  [auth.getCurrentUserRequest]: () => initialState,
  [auth.getCurrentUserSuccess]: () => initialState,
  [auth.registerSuccess]: () => initialState,
  [auth.logInSuccess]: () => initialState,
  [auth.logOutSuccess]: () => initialState,
  [auth.getCurrentUserSuccess]: () => initialState,
  [products.addPoductSuccess]: () => initialState,
  [products.searchPoductSuccess]: () => initialState,
  [products.deleteProductSuccess]: () => initialState,
  [products.dailyRatePrivateSuccess]: () => initialState,
  [products.dayInfoSuccess]: () => initialState,
  [products.dailyRatePublicSuccess]: () => initialState,
});

export default errorReducer;
