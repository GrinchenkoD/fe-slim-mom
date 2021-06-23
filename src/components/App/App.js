import React, { useEffect, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../redux/auth/authselectors';
import mainRoutes from '../../routes/mainroutes';
import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';
import authOperations from '../../redux/auth/authOperations';
import Spinner from '../Spinner/Spinner';
import NotificationError from '../Pnotify/Pnotify';

const App = () => {
  const currentToken = useSelector(authSelectors.token);
  const dispatch = useDispatch();




  
  NotificationError('test');
  




  useEffect(() => {
    if (currentToken) {
      dispatch(authOperations.getCurrentUser(currentToken));
    }
  }, [dispatch, currentToken]);

  return (
    <>
      <Suspense fallback={<Spinner></Spinner>}>
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
