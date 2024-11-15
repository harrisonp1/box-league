import { Button } from 'primereact/button';
import AddPlayer from './AddPlayer';
import { useState } from 'react';

export function AdminPage() {
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const onAddPlayer = () => {
    setShowAddPlayer(!showAddPlayer);
  };

  return (
    <>
      <div className="text-center p-5">
        <Button
          label="Add Player"
          icon="pi pi-user-plus"
          iconPos="right"
          onClick={() => onAddPlayer()}
        />
      </div>
      <AddPlayer showMe={showAddPlayer} />
      <div className="text-center p-5">
        <Button label="Enter Result" icon="pi pi-pencil" iconPos="right" />
      </div>
    </>
  );
}
