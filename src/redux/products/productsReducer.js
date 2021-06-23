import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productsActions from './productsActions';
import authActions from '../auth/authActions';

const initialState = {
  productList: [],
  userDailyProducts: [],
  pickedDate: '',
  caloriesReceived: 0,
};

const productList = createReducer(initialState.productList, {
  [productsActions.searchPoductSuccess]: (_, { payload }) => payload.products,
  [productsActions.searchPoductError]: () => initialState.productList,
  [authActions.logOutSuccess]: () => initialState.productList,
});

const userDailyProducts = createReducer(initialState.userDailyProducts, {
  [productsActions.addPoductSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [productsActions.deleteProductSuccess]: (state, { payload }) =>
    state.filter(product => product.id !== payload.id),
  [productsActions.dayInfoSuccess]: (_, { payload }) => [...payload.products],
  [authActions.logOutSuccess]: () => initialState.userDailyProducts,
});

const pickedDate = createReducer(initialState.pickedDate, {
  [productsActions.setPickedDate]: (_, { payload }) => payload,
  [productsActions.removePickedDate]: () => initialState.pickedDate,
});

const caloriesReceived = createReducer(initialState.caloriesReceived, {
  [productsActions.dayInfoSuccess]: (_, { payload }) =>
    payload.caloriesReceived,
  [productsActions.addPoductSuccess]: (_, { payload }) => payload.newCalories,
  [productsActions.deleteProductSuccess]: (_, { payload }) =>
    payload.data.newCalories,
  [authActions.logOutSuccess]: () => initialState.caloriesReceived,
});

export default combineReducers({
  productList,
  userDailyProducts,
  pickedDate,
  caloriesReceived,
});
