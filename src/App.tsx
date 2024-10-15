import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
