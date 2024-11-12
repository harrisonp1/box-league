import { matches } from '../../data/matches';
import League from './League';
import LeagueTable from './LeagueTable';

export function StandingsPage() {
  const league = new League(matches);
  const table = league.getStandings();
  console.log(table);

  return (
    <div className="text-center p-5">
      <LeagueTable table={table} />
    </div>
  );
}
