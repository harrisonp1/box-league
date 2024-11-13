import { Match, PlayerStats } from '../../types';

class League {
  private matches: Match[];
  private table: { [player: string]: PlayerStats };

  constructor(matches: Match[]) {
    this.matches = matches;
    this.table = {};
  }

  getStandings(div: number): { [player: string]: PlayerStats } {
    this.matches.forEach((match) => {
      const { player1, player2 } = match;

      // add teams to the table
      if (!this.table[player1]) this.addToTable(player1);
      if (!this.table[player2]) this.addToTable(player2);

      // add division
      this.addDivision(match);

      // increase the played counter
      this.increasePlayed([player1, player2]);

      // calculate won, lost, points
      this.addResults(match);
    });

    // Sort the players in the table by their points
    const sortedTable = Object.entries(this.table)
      .filter(([key, stats]) => stats.div === div)
      .sort((a, b) => {
        const pointsA = a[1].points;
        const pointsB = b[1].points;
        return pointsB - pointsA; // descending order
      })
      .reduce(
        (acc, [player, stats]) => {
          acc[player] = stats;
          return acc;
        },
        {} as { [player: string]: PlayerStats },
      );

    return sortedTable;
  }

  private addToTable(player: string): void {
    this.table[player] = {
      div: 0,
      played: 0,
      won: 0,
      lost: 0,
      points: 0,
    };
  }

  private increasePlayed(teams: string[]): void {
    teams.forEach((team) => {
      if (this.table[team]) {
        this.table[team].played++;
      }
    });
  }

  private addDivision(match: Match): void {
    const { div, player1, player2 } = match;
    this.table[player1].div = div;
    this.table[player2].div = div;
  }

  private addResults(match: Match): void {
    const {
      player1,
      player2,
      set1player1games,
      set1player2games,
      set2player1games,
      set2player2games,
      set3player1points,
      set3player2points,
    } = match;

    const player1set1winner = set1player1games > set1player2games;
    const player1set2winner = set2player1games > set2player2games;
    const set3played = set3player1points !== null && set3player2points !== null;
    const player1set3winner = set3played ? set3player1points > set3player2points : false;

    // add won / lost
    if (
      (player1set1winner && player1set2winner) ||
      (player1set1winner && player1set3winner) ||
      (player1set2winner && player1set3winner)
    ) {
      this.table[player1].won++;
      this.table[player1].points = this.table[player1].points + 5;
      this.table[player2].lost++;
      if (set3played) {
        this.table[player2].points = this.table[player2].points + 1;
      }
    } else {
      this.table[player2].won++;
      this.table[player2].points = this.table[player2].points + 5;
      this.table[player1].lost++;
      if (set3played) {
        this.table[player1].points = this.table[player1].points + 1;
      }
    }
  }
}

export default League;
