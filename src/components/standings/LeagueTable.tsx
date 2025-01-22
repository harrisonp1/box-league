import React from 'react';
import { PlayerStats } from '../../types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface LeagueTableProps {
  table: { [player: string]: PlayerStats };
}

const LeagueTable: React.FC<LeagueTableProps> = ({ table }) => {
  const playerEntriesArray: [string, PlayerStats][] = Object.entries(table);
  const flatten = playerEntriesArray.reduce(
    (acc, [player, stats]) => {
      // Concatenate both the player name and their stats into the accumulator
      acc.push({
        player,
        ...stats,
      });
      return acc;
    },
    [] as { player: string; points: number }[],
  ); // Specify the type of the flattened array
  console.log(flatten);

  return (
    <div>
      <DataTable value={flatten} tableStyle={{ minWidth: '50rem' }} stripedRows>
        <Column field="player" header="Player"></Column>
        <Column field="status" style={{ color: 'red', fontStyle: 'italic' }}></Column>
        <Column field="played" header="P"></Column>
        <Column field="won" header="W"></Column>
        <Column field="lost" header="L"></Column>
        <Column field="points" header="Points" style={{ fontWeight: 'bold' }}></Column>
      </DataTable>
    </div>
  );
};

export default LeagueTable;
