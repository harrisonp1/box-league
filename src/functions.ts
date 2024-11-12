import { Player } from './types';

export const divisionPlayers = (players: Player[], division: number) => {
  const divisionRequired = players.filter((p) => {
    return p.div === division;
  });
  return divisionRequired;
};
