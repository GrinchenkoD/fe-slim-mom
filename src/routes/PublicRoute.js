import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/authselectors';

const PublicRoute = ({
  restricted = false,

  ...routeProps
}) => {
  const isAuthentificated = useSelector(authSelectors.isAuthenticated);
  const completedCalcForm = useSelector(authSelectors.dailyCaloriesRate);

  const redirectTo = !!completedCalcForm ? '/diary' : '/calculator';

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
