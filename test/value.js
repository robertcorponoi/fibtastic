'use strict'

const chai = require('chai');
const fibonacci = require('../index');

describe('Retrieving a specific value from the Fibonacci sequence',  () => {

  it('should return the 20th value from the Fibonacci sequence, 6765', () => {

    const value = fibonacci.value(20);

    chai.expect(value).to.equal(6765);

  });

});

describe('Check if a value is a part of the Fibonacci sequence and if it is, return its position', () => {

  it('should return true but no value because 1 appears twice in the sequence', () => {

    const value = fibonacci.isValue(1);

    chai.expect(value).to.be.true;

  });

  it('should return 3', () => {

    const value = fibonacci.isValue(2);

    chai.expect(value).to.equal(3);

  });

  it('should return 4', () => {

    const value = fibonacci.isValue(3);

    chai.expect(value).to.equal(4);

  });

  it('should return 32', () => {

    const value = fibonacci.isValue(2178309);

    chai.expect(value).to.equal(32);

  });

  it('should return 56', () => {

    const value = fibonacci.isValue(225851433717);

    chai.expect(value).to.equal(56);

  });

  it('should return false', () => {

    const value = fibonacci.isValue(6770);

    chai.expect(value).to.be.false;

  });
  
});