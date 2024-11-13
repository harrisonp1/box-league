import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { PlayersPage } from './components/players/PlayersPage';
import { ResultsPage } from './components/results/ResultsPage';
import { StandingsPage } from './components/standings/StandingsPage';
import { AdminPage } from './components/admin/AdminPage';
import { AboutPage } from './components/AboutPage';

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
