import { matches } from '../../data/matches';
import { matchesColumnWidths } from '../columnWidths';
import { MatchRow } from './MatchRow';

export function ResultsPage() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">Here is a list of the results</h2>
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
        <div style={{ gridColumn: 1, gridRow: 1 }}>Player 1</div>
        <div style={{ gridColumn: 2, gridRow: 1 }}>Player 2</div>
        <div style={{ gridColumn: 3, gridRow: 1 }}>Set 1</div>
        <div style={{ gridColumn: 4, gridRow: 1 }}>Set 2</div>
        <div style={{ gridColumn: 5, gridRow: 1 }}>Set 3</div>
      </div>
      <div>
        {matches.map((match, i) => {
          return <MatchRow match={match} />;
        })}
      </div>
    </div>
  );
}
