import { createReducer } from '@reduxjs/toolkit';
import auth from '../auth/authActions';

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
});

export default loadingReducer;
