import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { authSelectors } from '../../redux/auth/authselectors';
import { token } from '../../redux/auth/authOperations';
// import Calculator from '../Calculator/Calculator';

const App = () => {
  const myToken = useSelector(authSelectors.token);
  useEffect(() => {
    myToken && token.set(myToken);

    // const token = JSON.parse(localStorage.getItem('persist:auth')).token;
    // console.log(token, '<<<<TOKEN В ЮЗЭФЕКТ');
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, [myToken]); //!!!    Срабатывает позже запроса

  return (
    <div>
      <Header />
      <Main />
      {/* <Modal /> */}
    </div>
  );
};

export default App;
