import React, { useEffect, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { authSelectors } from '../../redux/auth/authselectors';
import { token } from '../../redux/auth/authOperations';

import mainRoutes from '../../routes/mainroutes';
import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';
import isModalOpenSelector from '../../redux/modal/modalSelector';

const App = () => {
  const myToken = useSelector(authSelectors.token);
  const isModalOpen = useSelector(isModalOpenSelector);

  useEffect(() => {
    myToken && token.set(myToken);
  }, [myToken]);

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          {mainRoutes.map(route =>
            route.private ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            ),
          )}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
