import React from 'react';
import { Result } from '../../types';
import { resultsColumnWidths } from '../columnWidths';

interface ResultsRowProps {
  result: Result;
}

export const ResultsRow: React.FC<ResultsRowProps> = React.memo(({ result }: ResultsRowProps) => {
  return (
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
      <div style={{ gridColumn: 1, gridRow: 1 }}>{result.player1}</div>
      <div style={{ gridColumn: 2, gridRow: 1 }}>{result.player2}</div>
      <div style={{ gridColumn: 3, gridRow: 1 }}>{result.set1}</div>
      <div style={{ gridColumn: 4, gridRow: 1 }}>{result.set2}</div>
      <div style={{ gridColumn: 5, gridRow: 1 }}>{result.set3}</div>
    </div>
  );
});
