import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Header from '../Header/Header';
import Main from '../Main/Main';
import { authSelectors } from '../../redux/auth/authselectors';

import Calculator from '../Calculator/Calculator';

const App = () => {
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('persist:auth')).token;
    console.log(token, '<<<<TOKEN В ЮЗЭФЕКТ');
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  const token = JSON.parse(localStorage.getItem('persist:auth')).token;
  // user = JSON.parse(user);
  console.log(token, '<<<<TOKEN');
  // const token = useSelector(authSelectors.token);
  // console.log(token, 'token в app');
  // if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // }
  return (
    <div>
      <Header />
      <Main />

      {/* <Modal /> */}
    </div>
  );
};

export default App;
