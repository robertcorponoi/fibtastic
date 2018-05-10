"use strict"

const assert = require("assert");
const fibonacci = require("../index");

describe("Fibonacci", function () {
    describe("#sequence()", function () {
        it("should return an array consisting of the first 15 values of the Fibonacci sequence", function () {
            assert.deepEqual(fibonacci.sequence({ end: 15 }), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]);
        });

        it("should return the 10th through the 15th values of the Fibonacci sequence", function () {
            assert.deepEqual(fibonacci.sequence({ start: 10, end: 15 }), [55, 89, 144, 233, 377, 610]);
        });

        it("should throw an error when end location is not specified", function () {
            assert.throws(function () { fibonacci.sequence({ start: 10 }); }, Error, "An end point must be specified.");
        });
    });

    describe("#value()", function () {
        it("should return the 20th value of the Fibonacci sequence which is 6765", function () {
            assert.equal(fibonacci.value(20), 6765);
        });
    });

    describe("#isValue()", function () {
        it("should return true", function () {
            assert.equal(fibonacci.isValue(1), true);
        });

        it("should return 3", function () {
            assert.equal(fibonacci.isValue(2), 3);
        });

        it("should return 4", function () {
            assert.equal(fibonacci.isValue(3), 4);
        });

        it("should return 32", function () {
            assert.equal(fibonacci.isValue(2178309), 32);
        });

        it("should return 56", function () {
            assert.equal(fibonacci.isValue(225851433717), 56);
        });

        it("should return false", function () {
            assert.equal(fibonacci.isValue(6770), false);
        });
    });
});