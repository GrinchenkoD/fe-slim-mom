import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Header from '../Header/Header';
import Main from '../Main/Main';
import { authSelectors } from '../../redux/auth/authselectors';

import Calculator from '../Calculator/Calculator';
import DiaryProductsListItem from '../DiaryProductsList/DiaryProductsListItem/DiaryProductsListItem';

const App = () => {
  const token = useSelector(authSelectors.token);
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log(token);
  }
  return (
    <div>
      <Header />
      <Main />
      {/* <Modal /> */}
      <DiaryProductsListItem/>
    </div>
  );
};

export default App;
