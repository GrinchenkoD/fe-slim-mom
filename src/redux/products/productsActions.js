import { createAction } from '@reduxjs/toolkit';

const setPickedDate = createAction('product/setPickedDate');
const removePickedDate = createAction('product/removePickedDate');

const searchPoductRequest = createAction('product/searchPoductRequest');
const searchPoductSuccess = createAction('product/searchPoductSuccess');
const searchPoductError = createAction('product/searchPoductError');

const addPoductRequest = createAction('product/addPoductRequest');
const addPoductSuccess = createAction('product/addPoductSuccess');
const addPoductError = createAction('product/addPoductError');

const deleteProductRequest = createAction('product/deletePoductRequest');
const deleteProductSuccess = createAction('product/deletePoductSuccess');
const deleteProductError = createAction('product/deletePoductError');

export default {
  setPickedDate,
  removePickedDate,
  searchPoductRequest,
  searchPoductSuccess,
  searchPoductError,
  addPoductRequest,
  addPoductSuccess,
  addPoductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
};
