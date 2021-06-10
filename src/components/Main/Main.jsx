import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import mainRoutes from '../../routes/mainroutes';
import PrivateRoute from "../../routes/PrivateRoute"
import PublicRoute from "../../routes/PublicRoute"


const Main = () => {


    return (
        <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          {mainRoutes.map(route =>
            route.private ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            ),
          )}
        </Switch>
      </Suspense>
    )
}

export default Main
