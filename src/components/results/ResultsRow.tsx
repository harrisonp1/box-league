import React from 'react';
import { Result } from '../../types';

interface ResultsRowProps {
  result: Result;
}

export const ResultsRow: React.FC<ResultsRowProps> = React.memo(({ result }: ResultsRowProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '5em 5em 3em 3em 3em',
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
