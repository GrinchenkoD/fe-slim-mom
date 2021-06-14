import { createReducer } from '@reduxjs/toolkit';
<<<<<<< HEAD
import auth from './auth/authActions';
=======
import auth from './auth/authActions'
import products from './products/productsActions';

>>>>>>> baf24bd765da4e0ebb73f23685aee5c7601305df

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
