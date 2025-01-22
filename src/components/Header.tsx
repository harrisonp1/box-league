import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="text-center text-slate-50 bg-slate-900 h-30 p-5">
      <h1 className="text-2xl">Lowlands Box League</h1>
      <nav style={{ display: 'flex', paddingTop: '1em' }}>
        <NavLink
          to="players"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 flex-1 ${isActive ? 'border-white' : 'border-transparent'}`
          }
        >
          Players
        </NavLink>
        <NavLink
          to="results"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 flex-1 ${isActive ? 'border-white' : 'border-transparent'}`
          }
        >
          Results
        </NavLink>
        <NavLink
          to="standings"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 flex-1 ${isActive ? 'border-white' : 'border-transparent'}`
          }
        >
          Standings
        </NavLink>
        <NavLink
          to="admin"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 flex-1 ${isActive ? 'border-white' : 'border-transparent'}`
          }
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
}
