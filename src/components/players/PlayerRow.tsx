import React from 'react';
import { Player } from '../../types';
import { playersColumnWidths } from '../columnWidths';

interface PlayerRowProps {
  player: Player;
}

export const PlayerRow: React.FC<PlayerRowProps> = React.memo(({ player }: PlayerRowProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `${playersColumnWidths[0]} 
            ${playersColumnWidths[1]} 
            ${playersColumnWidths[2]}`,
        gridTemplateRows: 'repeat(auto)',
      }}
    >
      <div style={{ gridColumn: 1, gridRow: 1 }}>{player.id}</div>
      <div style={{ gridColumn: 2, gridRow: 1 }}>{player.name}</div>
      <div style={{ gridColumn: 3, gridRow: 1 }}>{player.div}</div>
    </div>
  );
});
