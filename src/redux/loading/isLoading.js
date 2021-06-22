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
  [auth.getCurrentUserRequest]: (_, __) => true,
  [auth.getCurrentUserSuccess]: (_, __) => false,
  [auth.getCurrentUserError]: (_, __) => false,

  [products.searchPoductRequest]: (_, __) => true,
  [products.addPoductRequest]: (_, __) => true,
  [products.deleteProductRequest]: (_, __) => true,
  [products.addPoductError]: (_, __) => false,
  [products.addPoductSuccess]: (_, __) => false,
  [products.searchPoductError]: (_, __) => false,
  [products.searchPoductSuccess]: (_, __) => false,
  [products.deleteProductSuccess]: (_, __) => false,
  [products.deleteProductError]: (_, __) => false,

  [products.dailyRatePrivateRequest]: (_, __) => true,
  [products.dailyRatePrivateSuccess]: (_, __) => false,
  [products.dailyRatePrivateError]: (_, __) => false,

  [products.dailyRatePublicRequest]: (_, __) => true,
  [products.dailyRatePublicSuccess]: (_, __) => false,
  [products.dailyRatePublicError]: (_, __) => false,

  [products.dayInfoRequest]: (_, __) => true,
  [products.dayInfoSuccess]: (_, __) => false,
  [products.dayInfoError]: (_, __) => false,
});

export default loadingReducer;
