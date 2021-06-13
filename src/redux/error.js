import { createReducer } from '@reduxjs/toolkit';
import auth from './auth/authActions'
import products from './products/productsActions';


const intialState = null;
const errorReducer = createReducer(intialState, {
  [auth.registerError]: (_, { payload }) => payload,
  [auth.logInError]: (_, { payload }) => payload,
  [auth.logOutError]: (_, { payload }) => payload,
  [auth.getCurrentUserError]: (_, { payload }) => payload,
  [products.addPoductError]: (_, { payload }) => payload,
  [products.searchPoductError]: (_, { payload }) => payload,

});

export default errorReducer;