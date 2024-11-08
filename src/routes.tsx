import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ResultsPage } from './components/results/ResultsPage';
import App from './App';
import { AboutPage } from './components/AboutPage';
import { PlayersPage } from './components/players/PlayersPage';
import { AdminPage } from './components/admin/AdminPage';
import { StandingsPage } from './components/standings/StandingsPage';

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
        path: 'standings',
        element: <StandingsPage />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
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
