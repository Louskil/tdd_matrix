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

    add(other) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error('Matrices dimensions must match');
        }
        
        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[i][j] = this.data[i][j] + other.data[i][j];
            }
        }
        return result;
    }

    subtract(other) {
        this._validateDimensions(other);
        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[i][j] = this.data[i][j] - other.data[i][j];
            }
        }
        return result;
    }
    
    multiply(other) {
        if (this.cols !== other.rows) {
            throw new Error('Invalid dimensions for multiplication');
        }
        
        const result = new Matrix(this.rows, other.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < other.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.data[i][k] * other.data[k][j];
                }
                result.data[i][j] = sum;
            }
        }
        return result;
    }

    determinant() {
        if (this.rows !== this.cols) throw new Error('Matrix must be square');
        if (this.rows === 2) {
            return this.data[0][0] * this.data[1][1] - this.data[0][1] * this.data[1][0];
        }
        // Реалізація для більших матриць...
    }
    
    transpose() {
        const result = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[j][i] = this.data[i][j];
            }
        }
        return result;
    }
    
    _validateDimensions(other) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error('Matrices dimensions must match');
        }
    }
    
    static identity(size) {
        const matrix = new Matrix(size, size, 0);
        for (let i = 0; i < size; i++) {
            matrix.data[i][i] = 1;
        }
        return matrix;
    }
}