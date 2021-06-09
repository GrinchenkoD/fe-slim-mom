import { lazy } from 'react';

const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() =>
      import('../pages/test/home' /*webpackChunkName: "home-page" */),
    ),
    private: false,
    restricted: true,
  },
  {
    name: 'Login',
    path: '/login',
    exact: true,
    component: lazy(() =>
      import('../pages/test/logpage' /*webpackChunkName: "login-page" */),
    ),
    private: false,
    restricted: true,
  },
  {
    name: 'registration',
    path: '/registration',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/test/regpage' /*webpackChunkName: "registration-page" */
      ),
    ),
    private: false,
    restricted: true,
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    exact: false,
    component: lazy(() =>
      import('../pages/test/dashpage' /*webpackChunkName: "sprints-page" */),
    ),
    private: true,
    restricted: false,
  },
];
export default mainRoutes;
