import { createReducer } from '@reduxjs/toolkit';
import auth from '../auth/authActions';
import products from '../products/productsActions';

const intialState = false;

const loadingReducer = createReducer(intialState, {
  [auth.registerRequest]: () => true,
  [auth.registerSuccess]: () => false,
  [auth.registerError]: () => false,
  [auth.logInRequest]: () => true,
  [auth.logInSuccess]: () => false,
  [auth.logInError]: () => false,
  [auth.logOutRequest]: () => true,
  [auth.logOutRequest]: () => false,
  [auth.logOutError]: () => false,
  [auth.getCurrentUserRequest]: () => true,
  [auth.getCurrentUserSuccess]: () => false,
  [auth.getCurrentUserError]: () => false,

  [products.searchPoductRequest]: () => true,
  [products.addPoductRequest]: () => true,
  [products.deleteProductRequest]: () => true,
  [products.addPoductError]: () => false,
  [products.addPoductSuccess]: () => false,
  [products.searchPoductError]: () => false,
  [products.searchPoductSuccess]: () => false,
  [products.deleteProductSuccess]: () => false,
  [products.deleteProductError]: () => false,

  [products.dailyRatePrivateRequest]: () => true,
  [products.dailyRatePrivateSuccess]: () => false,
  [products.dailyRatePrivateError]: () => false,

  [products.dailyRatePublicRequest]: () => true,
  [products.dailyRatePublicSuccess]: () => false,
  [products.dailyRatePublicError]: () => false,

  [products.dayInfoRequest]: () => true,
  [products.dayInfoSuccess]: () => false,
  [products.dayInfoError]: () => false,
});

export default loadingReducer;
