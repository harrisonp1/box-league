import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ResultsPage } from './components/results/ResultsPage';
import { Header } from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
  {
    path: 'results',
    element: <ResultsPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
