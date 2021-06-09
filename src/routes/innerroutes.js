import { lazy } from 'react';

export const innerroutes = [
  {
    exact: true,
    path: '/diary',
    name: 'дневник',
    component: lazy(() =>
      import('../pages/test/diary' /*webpackChunkName: "diary-page" */),
    ),
  },
  {
    exact: true,
    path: '/calculator',
    name: 'калькулятор',
    component: lazy(() =>
      import('../pages/test/calc' /*webpackChunkName: "calculator-page" */),
    ),
  },
];
