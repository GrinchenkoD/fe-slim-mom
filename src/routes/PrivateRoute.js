import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ redirectTo = '/', ...routeProps }) => {
  const isAuthentificated = true; //! Для проверки

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
