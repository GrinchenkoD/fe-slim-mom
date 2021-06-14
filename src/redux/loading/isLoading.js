import { createReducer } from '@reduxjs/toolkit';
import auth from '../auth/authActions';
import products from '../products/productsActions';

const intialState = false;

const loadingReducer = createReducer(intialState, {
  [auth.registerRequest]: (_, __) => true,
  [auth.registerSuccess]: (_, __) => false,
  [auth.registerError]: (_, __) => false,
  [auth.logInRequest]: (_, __) => true,
  [auth.logInSuccess]: (_, __) => false,
  [auth.logInError]: (_, __) => false,
  [auth.logOutRequest]: (_, __) => true,
  [auth.logOutRequest]: (_, __) => false,
  [auth.logOutError]: (_, __) => false,
  [products.searchPoductRequest]: (_, __) => true,
  [products.addPoductRequest]: (_, __) => true,
  [products.addPoductError]: (_, __) => false,
  [products.addPoductSuccess]: (_, __) => false,
  [products.searchPoductError]: (_, __) => false,
  [products.searchPoductSuccess]: (_, __) => false,
});

export default loadingReducer;
