import { createReducer } from '@reduxjs/toolkit';
import auth from './auth/authActions';

const intialState = null;
const errorReducer = createReducer(intialState, {
  [auth.registerError]: (_, { payload }) => payload,
  [auth.logInError]: (_, { payload }) => payload,
  [auth.logOutError]: (_, { payload }) => payload,
  [auth.getCurrentUserError]: (_, { payload }) => payload,
});

export default errorReducer;
