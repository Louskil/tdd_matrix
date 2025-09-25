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