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

const dailyRatePrivateRequest = createAction('product/dailyRatePrivateRequest');
const dailyRatePrivateSuccess = createAction('product/dailyRatePrivateSuccess');
const dailyRatePrivateError = createAction('product/dailyRatePrivateError');

const dailyRatePublicRequest = createAction('product/dailyRatePublicRequest');
const dailyRatePublicSuccess = createAction('product/dailyRatePublicSuccess');
const dailyRatePublicError = createAction('product/dailyRatePublicError');

const dayInfoRequest = createAction('product/dayInfoRequest');
const dayInfoSuccess = createAction('product/dayInfoSuccess');
const dayInfoError = createAction('product/dayInfoError');

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
  dailyRatePrivateRequest,
  dailyRatePrivateSuccess,
  dailyRatePrivateError,
  dailyRatePublicRequest,
  dailyRatePublicSuccess,
  dailyRatePublicError,
  dayInfoRequest,
  dayInfoSuccess,
  dayInfoError,
};
