import { players } from '../../data/players';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

export function PlayersPage() {
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const footer = `There are ${players.length} players in total`;
  // const onFilterMine = (e: HTMLInputElement) => {
  //   const myVal: HTMLInputElement = e;
  //   setFilters({ global: { value: myVal, matchMode: FilterMatchMode.CONTAINS } });
  // };

  return (
    <div className="text-center p-5">
      <InputText
        onInput={(e) => {
          setFilters({
            global: { value: e.currentTarget.value, matchMode: FilterMatchMode.CONTAINS },
          });
        }}
      />

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
        filters={filters}
        // filterDisplay="row"
        // onFilter={(e) => onFilterMine(e)}
        emptyMessage="No customers found."
      >
        <Column field="id" header="Id"></Column>
        <Column
          field="name"
          header="Name"
          sortable
          // filter
          // filterPlaceholder="Search by name"
          style={{ width: '20rem' }}
        ></Column>
        <Column field="div" header="Division" sortable></Column>
      </DataTable>
    </div>
  );
}
