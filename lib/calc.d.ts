/**
 * Calc contains methods for performing the binet and reverse
 * binet calculations.
 *
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 *
 * @version 1.0.0
 */
/**
 * Binet's formula is used to find a Fibonacci value at a specific location without
 * having to loop through the whole sequence until we arrive at the specified location.
 *
 * @since 0.1.0
 * @private
 *
 * @param {number} location The location in the Fibonacci sequence to get the Fibonacci value from.
 *
 * @returns {number} The Fibonacci value at the specified location.
 */
export declare function binets(location: number): number;
/**
 * The inverse of the Binet's formula which is used to find the location in the Fibonacci sequence
 * of a specified value.
 *
 * Due to limitations of the formula, this only works for values of 3 or higher.
 *
 * @since 0.1.0
 * @private
 *
 * @param {number} value The Fibonacci value to find the location of in the sequence.
 *
 * @returns {number} The location of the specified value in the Fibonacci sequence.
 */
export declare function inverseBinets(value: number): number;
/**
 * Checks to see whether a specified value is a part of the Fibonacci sequence or not.
 *
 * This method will return true if the value is a part of the Fibonacci sequence or false
 * if it is not.
 *
 * @since 0.1.0
 * @private
 *
 * @param {number} value The value to check if exists in the Fibonacci sequence or not.
 *
 * @returns {boolean} True if the value is part of the Fibonacci sequence and false otherwise.
 */
export declare function isFib(value: number): boolean;
