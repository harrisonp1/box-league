import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ResultsPage } from './components/results/ResultsPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'results',
        element: <ResultsPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
