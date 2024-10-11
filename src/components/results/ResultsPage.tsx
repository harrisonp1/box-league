import { results } from '../../data/results';
import { resultsColumnWidths } from '../columnWidths';
import { ResultsRow } from './ResultsRow';

export function ResultsPage() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">Here is a list of the results</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `${resultsColumnWidths[0]} 
            ${resultsColumnWidths[1]} 
            ${resultsColumnWidths[2]} 
            ${resultsColumnWidths[3]} 
            ${resultsColumnWidths[4]}`,
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
        {results.map((result, i) => {
          return <ResultsRow result={result} />;
        })}
      </div>
    </div>
  );
}
