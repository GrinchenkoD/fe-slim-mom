import { createReducer } from '@reduxjs/toolkit';

const dateInitialState = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const result = `${date.getDate()}-${
    month < 10 ? '0' : ''
  }${month}-${date.getFullYear()}`;

  return result;
};
const date = createReducer(dateInitialState(), {
  //   [authActions.logInSuccess]: (_, { payload }) => payload.login,
  //   [authActions.logOutSuccess]: () => dateInitialState,
  //   [authActions.logOutError]: () => dateInitialState(),
  //   [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

export default date;
