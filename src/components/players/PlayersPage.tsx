import { players } from '../../data/players';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { Player } from '../../types';

export function PlayersPage() {
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(
    players.filter((player) => player.div.toString().includes('1')),
  );
  const [divFilter, setDivFilter] = useState<string>('1');

  const footer = `There are ${filteredPlayers.length} players in this division`;

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    setDivFilter(filterValue);

    // Filter players by the div value (if the input is not empty)
    const filtered = players.filter((player) => player.div.toString().includes(filterValue));

    setFilteredPlayers(filtered);
  };

  return (
    <div className="text-center p-5 grid place-items-center">
      <select value={divFilter} onChange={handleFilterChange}>
        <option value={1}>Division 1</option>
        <option value={2}>Division 2</option>
      </select>

      <DataTable
        value={filteredPlayers}
        tableStyle={{ minWidth: '50rem' }}
        footer={footer}
        stripedRows
        rows={15}
      >
        <Column field="name" header="Name" style={{ width: '20rem' }}></Column>
      </DataTable>
    </div>
  );
}
