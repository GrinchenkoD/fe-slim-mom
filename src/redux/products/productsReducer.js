import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productsActions from './productsActions';


const productList = createReducer([], {
    [productsActions.searchPoductSuccess]: (_, { payload }) => payload.products,
    [productsActions.searchPoductError]: (_, __) => [],
})

const userDaylyProducts = createReducer([], {
    [productsActions.addPoductSuccess]: (state, { payload }) => [...state, payload],
    
})

const pickedDate = createReducer('', {
    [productsActions.setPickedDate]: (_, { payload }) => payload,
    [productsActions.removePickedDate]: (_, __) => '',
})

export default combineReducers({
  productList,
  userDaylyProducts,
  pickedDate,
});