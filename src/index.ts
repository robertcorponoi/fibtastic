'use strict'

import * as calc from './calc';

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
export function sequence(start: number, end: number): Array<number> {

	if (arguments.length == 1) {

		start = 0;
		end = arguments[0];

	}
	else start -= 1;

	// Keep a reference to the first two values of the Fibonacci sequence as they are irregular
	// compared to the whole.
	let result: Array<number> = [0, 1];

	// If the user only wants one or two of the first values, we already saved them so just return
	// the slice they need.
	if (end <= 2) return result.slice(0, end);

	for (let i = 0; i < end; ++i) {

		const currentValue = i + 2;

		result[currentValue] = result[currentValue - 1] + result[currentValue - 2];

	}

	result = result.slice(1, end + 1);

	return result.splice(start, end);

}

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
export function value(location: number): number {

	return calc.binets(location);

}

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
export function isValue(value: number): (boolean|number) {

  // The value falls within one of the first two numbers.
  if (value > 0 && value < 2) return true;

  else if (calc.isFib(value)) return calc.inverseBinets(value);

  else return false;

}