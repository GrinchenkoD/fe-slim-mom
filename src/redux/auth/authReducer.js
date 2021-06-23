import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';
import productsActions from '../products/productsActions';

const initialState = {
  user: { login: '', dailyCalories: 0, forbidenCategories: [] },
  token: null,
  isAuthenticated: false,
};

const login = createReducer(initialState.user.login, {
  [authActions.logInSuccess]: (_, { payload }) => payload.login,
  [authActions.logOutSuccess]: () => initialState.user.login,
  [authActions.logOutError]: () => initialState.user.login,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.login,
});

const dailyCalories = createReducer(initialState.user.dailyCalories, {
  [authActions.logInSuccess]: (_, { payload }) => payload.dailyCalories,
  [authActions.logOutSuccess]: () => initialState.user.dailyCalories,
  [authActions.logOutError]: () => initialState.user.dailyCalories,
  [productsActions.dailyRatePrivateSuccess]: (_, { payload }) =>
    payload.dailyCalories,
  [authActions.getCurrentUserSuccess]: (_, { payload }) =>
    payload.dailyCalories,
});

const forbidenCategories = createReducer(initialState.user.forbidenCategories, {
  [authActions.logInSuccess]: (_, { payload }) => payload.forbidenCategories,
  [authActions.logOutSuccess]: () => initialState.user.forbidenCategories,
  [authActions.logOutError]: () => initialState.user.forbidenCategories,
  [productsActions.dailyRatePrivateSuccess]: (_, { payload }) =>
    payload.forbidenCategories,
  [authActions.getCurrentUserSuccess]: (_, { payload }) =>
    payload.forbidenCategories,
});

const token = createReducer(initialState.token, {
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => initialState.token,
  [authActions.logOutError]: () => initialState.token,
  // [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.token,
});

const isAuthenticated = createReducer(initialState.isAuthenticated, {
  [authActions.logInSuccess]: () => true,
  [authActions.logOutSuccess]: () => initialState.isAuthenticated,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.getCurrentUserError]: () => initialState.isAuthenticated,
  [authActions.logOutError]: () => initialState.isAuthenticated,
});

const user = combineReducers({
  login,
  dailyCalories,
  forbidenCategories,
});

const authReducer = combineReducers({
  user,
  isAuthenticated,
  token,
});
export default authReducer;
