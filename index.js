// Матрична бібліотека

export class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array(rows).fill().map(() => Array(cols).fill(0));
    }
    
    get(row, col) {
        return this.data[row][col];
    }
}