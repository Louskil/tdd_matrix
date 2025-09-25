import { expect } from 'chai';
import { Matrix } from '../index.js';

describe('Matrix Library - TDD Approach', function() {
    
    describe('Matrix Creation', function() {
        it('should create empty 2x2 matrix with zeros', function() {
            const matrix = new Matrix(2, 2);
            expect(matrix.rows).to.equal(2);
            expect(matrix.cols).to.equal(2);
            expect(matrix.get(0, 0)).to.equal(0);
        });
    });
});

describe('Matrix Operations', function() {
    it('should add two matrices correctly', function() {
        const A = new Matrix(2, 2);
        const B = new Matrix(2, 2);
        A.data = [[1, 2], [3, 4]];
        B.data = [[5, 6], [7, 8]];
        
        const result = A.add(B);
        expect(result.get(0, 0)).to.equal(6);
        expect(result.get(0, 1)).to.equal(8);
    });
});