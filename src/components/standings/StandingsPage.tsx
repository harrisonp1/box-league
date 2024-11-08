import { matches } from '../../data/matches';
import { matchesColumnWidths } from '../columnWidths';
import League from './League';

export function StandingsPage() {
  const league = new League(matches);
  const standings = league.getStandings();
  console.log(standings);

  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">Here are the current standings</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `${matchesColumnWidths[0]} 
            ${matchesColumnWidths[1]} 
            ${matchesColumnWidths[2]} 
            ${matchesColumnWidths[3]} 
            ${matchesColumnWidths[4]}`,
          gridTemplateRows: 'repeat(auto)',
        }}
      >
        <div style={{ gridColumn: 1, gridRow: 1 }}>Name</div>
        <div style={{ gridColumn: 2, gridRow: 1 }}>Played</div>
        <div style={{ gridColumn: 3, gridRow: 1 }}>Won</div>
        <div style={{ gridColumn: 4, gridRow: 1 }}>Lost</div>
        <div style={{ gridColumn: 5, gridRow: 1 }}>Points</div>
      </div>
      <ul>
        <li>
          {Object.values(standings).map((d) => (
            <li key={d.played} value={d.played}>
              {d.played}
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
}
