import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
      <h1 className="text-2xl">Lowlands Box League</h1>
      <nav style={{ display: 'flex', paddingTop: '2em' }}>
        <NavLink
          to="players"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 flex-1 ${isActive ? 'border-white' : 'border-transparent'}`
          }
          // style={{ flex: 1 }}
        >
          Players
        </NavLink>
        <NavLink
          to="results"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 flex-1 ${isActive ? 'border-white' : 'border-transparent'}`
          }
          // style={{ flex: 1 }}
        >
          Results
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 flex-1 ${isActive ? 'border-white' : 'border-transparent'}`
          }
          // style={{ flex: 1 }}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}
