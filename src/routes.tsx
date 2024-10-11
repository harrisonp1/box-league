import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ResultsPage } from './components/results/ResultsPage';
import App from './App';
import { AboutPage } from './components/AboutPage';
import { PlayersPage } from './components/players/PlayersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'players',
        element: <PlayersPage />,
      },
      {
        path: 'results',
        element: <ResultsPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
