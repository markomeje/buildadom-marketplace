import { lazy } from 'react';
import pMinDelay from 'p-min-delay';

const Home = lazy(() => pMinDelay(import('./pages/Home/Home'), 500));

export const routes = [
   {
      element: <Home />,
      path: '/',
   },
];