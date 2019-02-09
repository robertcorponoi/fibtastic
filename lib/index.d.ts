/**
 * Fibtastic provides methods to easily work with the Fibonacci sequence.
 *
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 *
 * @version 1.0.0
 */
/**
 * Get an array of the Fibonacci sequence from a specified start location to a specified end location.
 *
 * If only one parameter is specified, it will be assumed that only the end location is specified meaning
 * the start location will be zero.
 *
 * Note that the term 'location' is used instead of 'index'. This is because we see the first value of the
 * Fibonnaci sequence as being 0, instead of the 0th index being 0.
 *
 * @since 0.1.0
 *
 * @param {number} [start=0] The location in the Fibonacci sequence to begin retrieving values from.
 * @param {number} end The location in the Fibonacci sequence to stop retrieving values from.
 *
 * @returns {Array} An array of values from the Fibonacci sequence from the start to end locations.
 */
export declare function sequence(start: number, end: number): Array<number>;
/**
 * Get the Fibonacci value at the specified location in the Fibonacci sequence.
 *
 * This method uses the binet's formula which is used to find a Fibonacci value
 * at a specific location without having to loop through the whole sequence.
 *
 * @since 0.1.0
 *
 * @param {number} location The location in the Fibonacci sequence to get the Fibonacci value from.
 *
 * @returns {number} The Fibonacci value at the specified location.
 */
export declare function value(location: number): number;
/**
 * Check whether a specified value is a part of the Fibonacci sequence or not.
 *
 * Due to the restrictions of the inverse Binet's formula, this will return true
 * if the exact location of the value can be determined in the sequence or false
 * otherwise.
 *
 * @param {number} value The value to check if exists in the Fibonacci sequence or not.
 *
 * @returns {boolean|number} Return the location of the value in the Fibonacci sequence or false.
 */
export declare function isValue(value: number): (boolean | number);
