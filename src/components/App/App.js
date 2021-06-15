import React from 'react';
import DiaryProductsList from '../DiaryProductsList/DiaryProductsList';
import Header from '../Header/Header';
import Main from '../Main/Main';

import Calculator from '../Calculator/Calculator';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      {/* <Modal /> */}
      <DiaryProductsList/>
    </div>
  );
};

export default App;
