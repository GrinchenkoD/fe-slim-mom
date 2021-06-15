import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Header from '../Header/Header';
import Main from '../Main/Main';
import { authSelectors } from '../../redux/auth/authselectors';

import Calculator from '../Calculator/Calculator';

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
    </div>
  );
};

export default App;
