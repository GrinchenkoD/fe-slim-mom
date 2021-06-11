import { lazy } from 'react';

const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/HomePage/HomePage'
        /*webpackChunkName: "home-page" */
      ),
    ),
    private: false,
    restricted: true,
  },
  {
    name: 'вход',
    path: '/login',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/LoginPage/LoginPage' /*webpackChunkName: "login-page" */
      ),
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
        '../pages/RegisterPage/RegisterPage' /*webpackChunkName: "registration-page" */
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
      import('../pages/test/calc' /*webpackChunkName: "calculator-page" */),
    ),
    private: true,
    restricted: false,
  },
];
export default mainRoutes;
