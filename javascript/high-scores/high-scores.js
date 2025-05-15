//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this.playerScores = scores;
  }

  get scores() {
    return this.playerScores;
  }

  get latest() {
    return this.playerScores[this.playerScores.length-1];
  }

  get personalBest() {
    if (this.playerScores.length === 0){
      return 0;
    }
    let best = this.playerScores[0];
    this.playerScores.forEach(score => {
      if (score > best){
        best = score;
      }
    });
    return best;
  }

  get personalTopThree() {
    /*
    Option 1 – Less optimized for very high scores.
    
    return this.playerScores.sort((a, b) => a < b ? 1 : -1).slice(0, 3);
    */
    
    

    // Option 2 – More optimized for very high scores.
    if (this.playerScores.length < 4){
      return [...this.playerScores].sort((a, b) => b - a);
    }

    let top3 = [];
    for (const score of this.playerScores){
      if (top3.length < 3){
        top3.push(score);
        top3.sort((a, b) => b - a);
      }
      else if (score > top3[2]){
        top3[2] = score;
        top3.sort((a, b) => b - a);
      }
    }
    return top3;
  }
}
