"use strict"

/**
 * @file Simple module to calculate a Fibonacci sequence up to a certain number of integers or to get just one specific value from anywhere in the sequence.
 * @author Robert Corponoi
 */

const phi = 1.618033988749895;

module.exports = {
    /**
     * Return the Fibonacci Sequence up to a certain amount of results.
     * @param {Object} options - The start and end locations for the sequence result. These values at these locations are included in the result.
     * @param {Number} options.start - Start location for Fibonacci sequence values.
     * @param {Number} options.end - End location for Fibonacci sequence values.
     * @returns {Array}
     */
    sequence: function (options = { start: null, end: null }) {
        if (!options.end) throw new Error("An end point must be specified.");

        if (options.start) {
            options.start -= 1;
        } else {
            options.start = 0;
        }

        let result = [0, 1];

        if (options.end <= 2) return result;

        for (let i = 0; i < options.end; i++) {
            let curr = i + 2;
            result[curr] = result[curr - 1] + result[curr - 2];
        }
        result = result.slice(1, options.end + 1);

        return result.slice(options.start, options.end);
    },

    /**
     * Returns the specific Fibonacci number at the specified location in the sequence.
     * @param {Number} location - What location in the Fibonacci sequence the value is pulled from.
     * @returns {Number}
     */
    value: function (location) {
        return _binets(location);
    },

    /**
     * Checks whether the specified value is part of the Fibonacci sequence or not.
     * Since the inverse Binet's formula doesn't work on the first two values in the sequence, it will just return true since 1 is part of the sequence but we can't tell the exact location.
     * Otherwise if it is a value in the Fibonacci sequence it will return the location of the value and if it is not a value at all it will return false.
     * @param {Number} value - The number to check against the Fibonacci sequence.
     * @returns {Boolean|Number}
     */
    isValue: function (value) {
        if (value > 0 && value < 2) return true;

        if (_checkFib(value)) return _inverseBinets(value);

        return false;
    }
}

/**
 * Binet's formula used to find the value of a specific location in the Fibonacci sequence.
 * @param {Number} x - The location in the Fibonacci sequence to search.
 * @returns {Number}
 */
function _binets(x) {
    return Math.round(((Math.pow(phi, x)) - (Math.pow(1 - phi, x))) / Math.sqrt(5));
}

/**
 * The inverse of the Binet's formula used to find the location of a specific Fibonacci value. This only works on values 3 and above.
 * @param {Number} x - The Fibonnaci value to find the location in the sequence of.
 * @returns {Number}
 */
function _inverseBinets(x) {
    return Math.round((Math.log((x * Math.sqrt(5)) / 2)) / (Math.log(phi))) + 1;
}

/**
 * Checks to see if the value is a part of the Fibonacci sequence or not.
 * @param {Number} x - The value to check against the Fibonacci sequence.
 * @returns {Number}
 */
function _checkFib(x) {
    return Number.isInteger(Math.sqrt(5 * Math.pow(x, 2) + 4)) || Number.isInteger(Math.sqrt(5 * Math.pow(x, 2) - 4));
}