import { createReducer } from '@reduxjs/toolkit';
import productsActions from '../products/productsActions';

const dateInitialState = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const result = `${date.getDate()}-${
    month < 10 ? '0' : ''
  }${month}-${date.getFullYear()}`;

  return result;
};
const date = createReducer(dateInitialState(), {
  [productsActions.setPickedDate]: (_, { payload }) => payload,
});

export default date;
