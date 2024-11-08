import React from 'react';
import { Match } from '../../types';
import { matchesColumnWidths } from '../columnWidths';

interface MatchRowProps {
  match: Match;
}

export const MatchRow: React.FC<MatchRowProps> = React.memo(({ match }: MatchRowProps) => {
  return (
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
      <div style={{ gridColumn: 1, gridRow: 1 }}>{match.player1}</div>
      <div style={{ gridColumn: 2, gridRow: 1 }}>{match.player2}</div>
      <div style={{ gridColumn: 3, gridRow: 1 }}>
        {match.set1player1games}-{match.set1player2games}
      </div>
      <div style={{ gridColumn: 4, gridRow: 1 }}>
        {match.set2player1games}-{match.set2player2games}
      </div>
      <div style={{ gridColumn: 5, gridRow: 1 }}>
        {match.set3player1points}-{match.set3player2points}
      </div>
    </div>
  );
});
