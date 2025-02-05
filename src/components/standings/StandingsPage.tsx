import { useState } from 'react';
import { matches } from '../../data/matches';
import League from './League';
import LeagueTable from './LeagueTable';

export function StandingsPage() {
  const [seasonFilter, setSeasonFilter] = useState<string>('');
  const [roundFilter, setRoundFilter] = useState<number>(1);
  const [divFilter, setDivFilter] = useState<number>(1);

  const handleDivFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = parseInt(event.target.value);
    setDivFilter(filterValue);
  };

  const handleSeasonFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    setSeasonFilter(filterValue);
  };

  const handleRoundFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = parseInt(event.target.value);
    setRoundFilter(filterValue);
  };

  const league = new League(matches);
  const table = league.getStandings(seasonFilter, roundFilter, divFilter);
  console.log(table);

  return (
    <div className="text-center p-5 grid place-items-center">
      <select value={seasonFilter} onChange={handleSeasonFilterChange}>
        <option value={'24/25'}>Season 24/25</option>
        <option value={'23/24'}>Season 23/24</option>
      </select>
      <select value={roundFilter} onChange={handleRoundFilterChange}>
        <option value={1}>Round 1</option>
        <option value={2}>Round 2</option>
      </select>
      <select value={divFilter} onChange={handleDivFilterChange}>
        <option value={1}>Division 1</option>
        <option value={2}>Division 2</option>
      </select>
      <LeagueTable table={table} />
    </div>
  );
}
