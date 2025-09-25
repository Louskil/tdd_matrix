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

    let matrixA, matrixB;
    
    beforeEach(function() {
        matrixA = new Matrix(2, 2);
        matrixB = new Matrix(2, 2);
        matrixA.data = [[1, 2], [3, 4]];
        matrixB.data = [[5, 6], [7, 8]];
    });

describe('Basic Operations', function() {
        it('should add matrices', function() {
            const result = matrixA.add(matrixB);
            expect(result.data).to.deep.equal([[6, 8], [10, 12]]);
        });
        
        it('should subtract matrices', function() {
            const result = matrixA.subtract(matrixB);
            expect(result.data).to.deep.equal([[-4, -4], [-4, -4]]);
        });
        
        it('should multiply matrices', function() {
            const A = new Matrix(2, 3);
            const B = new Matrix(3, 2);
            A.data = [[1, 2, 3], [4, 5, 6]];
            B.data = [[7, 8], [9, 10], [11, 12]];
            
            const result = A.multiply(B);
            expect(result.data).to.deep.equal([[58, 64], [139, 154]]);
        });
    });
