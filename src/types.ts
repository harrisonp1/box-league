export interface Player {
  id: number;
  name: string;
  div: number;
}

export interface Result {
  id: number;
  player1: string;
  player2: string;
  set1: string;
  set2: string;
  set3: null | string;
}
