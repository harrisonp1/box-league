import { players } from '../../data/players';
import { playersColumnWidths } from '../columnWidths';
import { PlayerRow } from './PlayerRow';

export function PlayersPage() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">Players Page</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '2em',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: `${playersColumnWidths[0]} 
            ${playersColumnWidths[1]} 
            ${playersColumnWidths[2]}`,
            gridTemplateRows: 'repeat(auto)',
          }}
        >
          <div style={{ gridColumn: 1, gridRow: 1 }}>Id</div>
          <div style={{ gridColumn: 2, gridRow: 1 }}>Name</div>
          <div style={{ gridColumn: 3, gridRow: 1 }}>Division</div>
        </div>
        <div style={{ flex: 1 }}>
          {players.map((player, i) => {
            return <PlayerRow player={player} />;
          })}
        </div>
        <div style={{ flex: 1 }}>Add Player Button</div>
      </div>
    </div>
  );
}
