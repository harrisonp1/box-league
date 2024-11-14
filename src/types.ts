import { FilterMatchMode } from 'primereact/api';

export interface Player {
  id: number;
  name: string;
  div: number;
}

export interface Match {
  div: number;
  player1: string;
  player2: string;
  set1player1games: number;
  set1player2games: number;
  set2player1games: number;
  set2player2games: number;
  set3player1points: number | null;
  set3player2points: number | null;
  set1score?: string;
  set2score?: string;
  set3score?: string;
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

export interface PlayerStats {
  div: number;
  played: number;
  won: number;
  lost: number;
  points: number;
}
