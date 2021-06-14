import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const userInitialState = {};
const user = createReducer(userInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.login,
  [authActions.logOutSuccess]: () => userInitialState,
  [authActions.logOutError]: () => tokenInitialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const tokenInitialState = null;
const token = createReducer(tokenInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => tokenInitialState,
  [authActions.logOutError]: () => tokenInitialState,
});

const isAuthenticated = createReducer(false, {
  [authActions.logInSuccess]: () => true,
  [authActions.logOutSuccess]: () => false,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logOutError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
