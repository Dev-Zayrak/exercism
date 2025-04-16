//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(matrix){
    this.matrix = matrix
  }

  static around = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1,1]];
  static countAlive = (arr, x, y) => GameOfLife.around.reduce((acc, [a, b]) => acc + (arr[x + a]?.[y + b] ?? 0), 0)

  tick(){
    this.matrix = this.matrix.map((line, x) => line.map((cell, y) => {
      const alive = GameOfLife.countAlive(this.matrix, x, y);
      return alive === 3 ? 1 : alive === 2 && this.matrix[x][y] === 1 ? 1 : 0
    }));
  }

  state() {
    return this.matrix
  }
}
