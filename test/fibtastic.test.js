'use strict'

const test = require('ava');
const fibonacci = require('../index');

test('Getting the values of the first 15 indices of the fibonacci sequence', t => {

  const values = fibonacci.sequence(15);

  t.deepEqual(values, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]);

});

test('Getting the values of the fibonacci sequence from the 10th index to the 15th index', t => {

  const values = fibonacci.sequence(10, 15);

  t.deepEqual(values, [55, 89, 144, 233, 377, 610]);

});

test('Getting the 20th value from the fibonacci sequence', t => {

  const values = fibonacci.value(20);

  t.is(values, 6765);

});

test('Returning true because 1 appears in the fibonacci sequence but twice so its position cannot be exact', t => {

  const value = fibonacci.isValue(1);

  t.is(value, true);

});

test('Returning the position of the fibonacci value of 2', t => {

  const value = fibonacci.isValue(2);

  t.is(value, 3);

});

test('Returning the position of the fibonacci value of 3', t => {

  const value = fibonacci.isValue(3);

  t.is(value, 4);

});

test('Returning the position of the fibonacci value of 2178309', t => {

  const value = fibonacci.isValue(2178309);

  t.is(value, 32);

});

test('Returning the position of the fibonacci value of 225851433717', t => {

  const value = fibonacci.isValue(225851433717);

  t.is(value, 56);

});

test('Returning the position of the fibonacci value of 6770 which doesnt exist in the fibonacci sequence', t => {

  const value = fibonacci.isValue(6770);

  t.is(value, false);

});