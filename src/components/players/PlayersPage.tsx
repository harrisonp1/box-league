import { players } from '../../data/players';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export function PlayersPage() {
  const footer = `There are ${players.length} players in total`;
  return (
    <div className="text-center p-5">
      <DataTable
        value={players}
        tableStyle={{ minWidth: '50rem' }}
        footer={footer}
        header="Players"
        stripedRows
        paginator
        rows={5}
        sortMode="multiple"
        removableSort
        dataKey="id"
        emptyMessage="No customers found."
      >
        <Column field="id" header="Id"></Column>
        <Column field="name" header="Name" sortable style={{ width: '20rem' }}></Column>
        <Column field="div" header="Division" sortable></Column>
      </DataTable>
    </div>
  );
}
