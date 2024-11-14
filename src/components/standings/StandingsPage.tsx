import { useState } from 'react';
import { matches } from '../../data/matches';
import League from './League';
import LeagueTable from './LeagueTable';

export function StandingsPage() {
  const [divFilter, setDivFilter] = useState<number>(1);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = parseInt(event.target.value);
    setDivFilter(filterValue);
  };

  const league = new League(matches);
  const table = league.getStandings(divFilter);
  console.log(table);

  return (
    <div className="text-center p-5 grid place-items-center">
      <select value={divFilter} onChange={handleFilterChange}>
        <option value={1}>Division 1</option>
        <option value={2}>Division 2</option>
      </select>
      <LeagueTable table={table} />
    </div>
  );
}
