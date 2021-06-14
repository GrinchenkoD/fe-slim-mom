import { createReducer } from '@reduxjs/toolkit';
<<<<<<< HEAD:src/redux/loading/isLoading.js
import auth from '../auth/authActions';
=======
import auth from './auth/authActions';
import products from './products/productsActions';
>>>>>>> baf24bd765da4e0ebb73f23685aee5c7601305df:src/redux/isLoading.js

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
<<<<<<< HEAD:src/redux/loading/isLoading.js
});
=======
  [products.searchPoductRequest]: (_, __) => true,
  [products.addPoductRequest]: (_, __) => true,
  [products.addPoductError]: (_, __) => false,
  [products.addPoductSuccess]: (_, __) => false,
  [products.searchPoductError]: (_, __) => false,
  [products.searchPoductSuccess]: (_, __) => false,
})
>>>>>>> baf24bd765da4e0ebb73f23685aee5c7601305df:src/redux/isLoading.js

export default loadingReducer;
