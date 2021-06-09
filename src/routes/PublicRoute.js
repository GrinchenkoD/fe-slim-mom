import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  restricted = false,
  redirectTo = '/dashboard/calculator',
  ...routeProps
}) => {
  const isAuthentificated = true; //! Для проверки

  const shouldRedirect = !isAuthentificated && restricted;
  return (
    <>
      {shouldRedirect ? (
        <Route {...routeProps} />
      ) : (
        <Redirect to={redirectTo} />
      )}
    </>
  );
};

export default PublicRoute;
