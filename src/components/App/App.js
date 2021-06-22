import React, { useEffect, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { authSelectors } from '../../redux/auth/authselectors';
import mainRoutes from '../../routes/mainroutes';
import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';
import { getCurrentUser, token } from '../../redux/auth/authOperations';
import isModalOpenSelector from '../../redux/modal/modalSelector';

const App = () => {
  const currentToken = useSelector(authSelectors.token);
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalOpenSelector);

  useEffect(() => {
    currentToken && token.set(currentToken);
    if (currentToken) {
      dispatch(getCurrentUser(currentToken));
    }
  }, [currentToken]);

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
