import { FilterMatchMode } from 'primereact/api';

export interface Player {
  id: number;
  name: string;
  div: number;
}

export interface Match {
  id: number;
  player1: string;
  player2: string;
  set1player1games: number;
  set1player2games: number;
  set2player1games: number;
  set2player2games: number;
  set3player1points: number | null;
  set3player2points: number | null;
}

export interface Table {
  player: string;
  played: number;
  won: number;
  lost: number;
  points: number;
}

export interface PlayersFilter {
  value: string;
  matchMode: FilterMatchMode;
}
