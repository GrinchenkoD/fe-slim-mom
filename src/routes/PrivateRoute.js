import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/auth/authselectors';

const PrivateRoute = ({ redirectTo = '/', ...routeProps }) => {
  const isAuthentificated = useSelector(authSelectors.isAuthenticated);

  // const isAuthentificated = true; //! Для проверки

  return (
    <>
      {isAuthentificated ? (
        <Route {...routeProps} />
      ) : (
        <Redirect to={redirectTo} />
      )}
    </>
  );
};

export default PrivateRoute;
