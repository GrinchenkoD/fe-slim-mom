import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productsActions from './productsActions';
import authActions from '../auth/authActions';

const productList = createReducer([], {
  [productsActions.searchPoductSuccess]: (_, { payload }) => payload.products,
  [productsActions.searchPoductError]: (_, __) => [],
  [authActions.logOutSuccess]: (_, __) => [],
});

const userDailyProducts = createReducer([], {
  [productsActions.addPoductSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [productsActions.deleteProductSuccess]: (state, { payload }) =>
    state.filter(product => product.id !== payload.id),
  [productsActions.dayInfoSuccess]: (_, { payload }) => [...payload.products],
  [authActions.logOutSuccess]: (_, __) => [],
});

const pickedDate = createReducer('', {
  [productsActions.setPickedDate]: (_, { payload }) => payload,
  [productsActions.removePickedDate]: (_, __) => '',
});

const caloriesReceived = createReducer(0, {
  [productsActions.dayInfoSuccess]: (_, { payload }) =>
    payload.caloriesReceived,
  [productsActions.addPoductSuccess]: (_, { payload }) => payload.newCalories,
  [productsActions.deleteProductSuccess]: (_, { payload }) =>
    payload.data.newCalories,
  [authActions.logOutSuccess]: (_, __) => 0,
});

export default combineReducers({
  productList,
  userDailyProducts,
  pickedDate,
  caloriesReceived,
});
