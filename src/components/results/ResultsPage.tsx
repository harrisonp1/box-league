import { useState } from 'react';
import { matches } from '../../data/matches';
import { Match } from '../../types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export function ResultsPage() {
  const [divFilter, setDivFilter] = useState<string>('1');
  const [filteredMatches, setFilteredMatches] = useState<Match[]>(
    matches
      .filter((match) => match.div.toString().includes('1'))
      .map((match) => {
        const set1 = `${match.set1player1games}-${match.set1player2games}`;
        const set2 = `${match.set2player1games}-${match.set2player2games}`;
        const set3 =
          match.set3player1points === null
            ? '-'
            : `${match.set3player1points}-${match.set3player2points}`;
        return { ...match, set1score: set1, set2score: set2, set3score: set3 };
      }),
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    setDivFilter(filterValue);

    // Filter players by the div value (if the input is not empty)
    const filtered = matches.filter((match) => match.div.toString().includes(filterValue));

    const filteredAddSetScores = filtered.map((match) => {
      const set1 = `${match.set1player1games}-${match.set1player2games}`;
      const set2 = `${match.set2player1games}-${match.set2player2games}`;
      const set3 =
        match.set3player1points === null
          ? '-'
          : `${match.set3player1points}-${match.set3player2points}`;
      return { ...match, set1score: set1, set2score: set2, set3score: set3 };
    });

    setFilteredMatches(filteredAddSetScores);
  };

  return (
    <div className="text-center p-5 grid place-items-center">
      <select value={divFilter} onChange={handleFilterChange}>
        <option value={1}>Division 1</option>
        <option value={2}>Division 2</option>
      </select>

      <DataTable value={filteredMatches} tableStyle={{ minWidth: '50rem' }} stripedRows>
        <Column field="player1" header="Player 1"></Column>
        <Column field="player2" header="Player 2"></Column>
        <Column field="set1score" header="Set 1"></Column>
        <Column field="set2score" header="Set 2"></Column>
        <Column field="set3score" header="Set 3"></Column>
      </DataTable>
    </div>
  );
}
