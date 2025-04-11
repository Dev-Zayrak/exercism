//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(matrix) {
    this.matrix = matrix
  }

  tick() {
    
    let output = this.matrix.map(row => row.slice());
    
    for(let i = 0; i< this.matrix.length; i++){
      for(let y = 0; y<this.matrix[i].length; y++){

        let topLeft = this.matrix[i-1] === undefined || this.matrix[i-1][y-1] === undefined ? 0 : this.matrix[i-1][y-1]
        let topMid = this.matrix[i-1] === undefined || this.matrix[i-1][y] === undefined ? 0 : this.matrix[i-1][y]
        let topRight = this.matrix[i-1] === undefined || this.matrix[i-1][y+1] === undefined ? 0 : this.matrix[i-1][y+1]
        let left = this.matrix[i] === undefined  || this.matrix[i][y-1] === undefined ? 0 : this.matrix[i][y-1]
        let right = this.matrix[i] === undefined || this.matrix[i][y+1] === undefined ? 0 : this.matrix[i][y+1]
        let bottomLeft = this.matrix[i+1] === undefined || this.matrix[i+1][y-1] === undefined ? 0 : this.matrix[i+1][y-1]
        let bottomMid = this.matrix[i+1] === undefined || this.matrix[i+1][y] === undefined ? 0 : this.matrix[i+1][y]
        let bottomRight = this.matrix[i+1] === undefined || this.matrix[i+1][y+1] === undefined ? 0 : this.matrix[i+1][y+1]        

        let countAlives = [topLeft, topMid, topRight, left, right, bottomLeft, bottomMid, bottomRight].filter(x => x === 1).length

        countAlives === 3 ? output[i][y] = 1 : this.matrix[i][y] === 1 && countAlives === 2 ? output[i][y] = 1 : output[i][y] = 0  
      }
    }

    this.matrix = output
  }

  state() {
    return this.matrix
  }
}
