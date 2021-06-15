import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/auth/authselectors';

const PublicRoute = ({
  restricted = false,
  // redirectTo = '/calculator',
  ...routeProps
}) => {
  const isAuthentificated = useSelector(authSelectors.isAuthenticated);
  const completedCalcForm = useSelector(authSelectors.dailyCaloriesRate);
  console.log(isAuthentificated, 'isAuthenticated в public route');

  console.log(!!completedCalcForm, 'заполнена ли форма?');
  const redirectTo = !!completedCalcForm ? '/diary' : '/calculator';

  // const isAuthentificated = false; //! Для проверки

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
