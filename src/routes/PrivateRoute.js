import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/auth/authselectors';

const PrivateRoute = ({ redirectTo = '/login', ...routeProps }) => {
  const isAuthentificated = useSelector(authSelectors.isAuthenticated);
  const rehydrated = useSelector(authSelectors.persisted);

  return (
    <>
      {rehydrated &&
        (isAuthentificated ? (
          <Route {...routeProps} />
        ) : (
          <Redirect to={redirectTo} />
        ))}
    </>
  );
};

export default PrivateRoute;
