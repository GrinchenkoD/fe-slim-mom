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
    name: 'вход',
    path: '/login',
    exact: true,
    component: lazy(() =>
      import('../pages/test/logpage' /*webpackChunkName: "login-page" */),
    ),
    private: false,
    restricted: true,
  },
  {
    name: 'регистрация',
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
    name: 'дневник',
    path: '/diary',
    exact: true,
    component: lazy(() =>
      import('../pages/test/diary' /*webpackChunkName: "diary-page" */),
    ),
    private: true,
    restricted: false,
  },
  {
    name: 'калькулятор',
    path: '/calculator',
    exact: true,
    component: lazy(() =>
      import(
        '../components/TestModal/Calculator' /*webpackChunkName: "calculator-page" */
      ),
    ),
    private: true,
    restricted: false,
  },
];
export default mainRoutes;
