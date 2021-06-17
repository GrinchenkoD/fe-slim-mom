import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';
import productsActions from '../products/productsActions';

const userInitialState = '';
const login = createReducer(userInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.login,
  [authActions.logOutSuccess]: () => userInitialState,
  [authActions.logOutError]: () => tokenInitialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const dailyCaloriesInitialState = 0;

const dailyCalories = createReducer(dailyCaloriesInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.dailyCalories, //! Получить при логине
  [authActions.logOutSuccess]: () => dailyCaloriesInitialState,
  [authActions.logOutError]: () => dailyCaloriesInitialState,
  [productsActions.dailyRatePrivateSuccess]: (_, { payload }) =>
    payload.dailyCalories,
});

const categoriesInitialState = [];

const forbidenCategories = createReducer(categoriesInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.forbidenCategories, //! Получить при логине
  [authActions.logOutSuccess]: () => categoriesInitialState,
  [authActions.logOutError]: () => categoriesInitialState,
  [productsActions.dailyRatePrivateSuccess]: (_, { payload }) =>
    payload.forbidenCategories,
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
  // [authActions.getCurrentUserSuccess]: () => true,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logOutError]: () => false,
});

const user = combineReducers({
  login,
  dailyCalories,
  forbidenCategories,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
