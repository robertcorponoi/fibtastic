'use strict'

const chai = require('chai');
const fibonacci = require('../index');

describe('Creating a Fibonacci sequence from a start value to an end value',  () => {

  it('should return an array of the 15 values of the Fibonacci sequence', () => {

    const values = fibonacci.sequence(15);

    chai.expect(values).to.deep.equal([1, 1, 2, 3, 5,8, 13, 21, 34, 55, 89, 144, 233, 377, 610]);

  });

  it('should return an array of the values from the 10th position to the 15th position of the Fibonacci sequence', () => {

    const values = fibonacci.sequence(10, 15);

    chai.expect(values).to.deep.equal([55, 89, 144, 233, 377, 610]);

  });

});