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

  [auth.registerSuccess]: (_, __) => initialState,
  [auth.logInSuccess]: (_, __) => initialState,
  [auth.logOutSuccess]: (_, __) => initialState,
  [auth.getCurrentUserSuccess]: (_, __) => initialState,
  [products.addPoductSuccess]: (_, __) => initialState,
  [products.searchPoductSuccess]: (_, __) => initialState,
  [products.deleteProductSuccess]: (_, __) => initialState,
  [products.dailyRatePrivateSuccess]: (_, __) => initialState,
  [products.dailyRatePublicSuccess]: (_, __) => initialState,
});

export default errorReducer;
