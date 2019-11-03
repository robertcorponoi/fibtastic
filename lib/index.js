'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
exports.value = value;
exports.isValue = isValue;

var calc = _interopRequireWildcard(require("./calc"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Fibtastic provides methods to easily work with the Fibonacci sequence.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 2.0.0
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
function sequence(start, end) {
  if (arguments.length == 1) {
    start = 0;
    end = arguments[0];
  } else start -= 1; // Keep a reference to the first two values of the Fibonacci sequence as they are irregular
  // compared to the whole.


  var result = [0, 1]; // If the user only wants one or two of the first values, we already saved them so just return
  // the slice they need.

  if (end <= 2) return result.slice(0, end);

  for (var i = 0; i < end; ++i) {
    var currentValue = i + 2;
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


function value(location) {
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


function isValue(value) {
  // The value falls within one of the first two numbers.
  if (value > 0 && value < 2) return true;else if (calc.isFib(value)) return calc.inverseBinets(value);else return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJzZXF1ZW5jZSIsInN0YXJ0IiwiZW5kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicmVzdWx0Iiwic2xpY2UiLCJpIiwiY3VycmVudFZhbHVlIiwic3BsaWNlIiwidmFsdWUiLCJsb2NhdGlvbiIsImNhbGMiLCJiaW5ldHMiLCJpc1ZhbHVlIiwiaXNGaWIiLCJpbnZlcnNlQmluZXRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUVBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQWlDQyxHQUFqQyxFQUE2RDtBQUVuRSxNQUFJQyxTQUFTLENBQUNDLE1BQVYsSUFBb0IsQ0FBeEIsRUFBMkI7QUFFMUJILElBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0FDLElBQUFBLEdBQUcsR0FBR0MsU0FBUyxDQUFDLENBQUQsQ0FBZjtBQUVBLEdBTEQsTUFNS0YsS0FBSyxJQUFJLENBQVQsQ0FSOEQsQ0FVbkU7QUFDQTs7O0FBQ0EsTUFBSUksTUFBcUIsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQTVCLENBWm1FLENBY25FO0FBQ0E7O0FBQ0EsTUFBSUgsR0FBRyxJQUFJLENBQVgsRUFBYyxPQUFPRyxNQUFNLENBQUNDLEtBQVAsQ0FBYSxDQUFiLEVBQWdCSixHQUFoQixDQUFQOztBQUVkLE9BQUssSUFBSUssQ0FBUyxHQUFHLENBQXJCLEVBQXdCQSxDQUFDLEdBQUdMLEdBQTVCLEVBQWlDLEVBQUVLLENBQW5DLEVBQXNDO0FBRXJDLFFBQU1DLFlBQW9CLEdBQUdELENBQUMsR0FBRyxDQUFqQztBQUVBRixJQUFBQSxNQUFNLENBQUNHLFlBQUQsQ0FBTixHQUF1QkgsTUFBTSxDQUFDRyxZQUFZLEdBQUcsQ0FBaEIsQ0FBTixHQUEyQkgsTUFBTSxDQUFDRyxZQUFZLEdBQUcsQ0FBaEIsQ0FBeEQ7QUFFQTs7QUFFREgsRUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxDQUFiLEVBQWdCSixHQUFHLEdBQUcsQ0FBdEIsQ0FBVDtBQUVBLFNBQU9HLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjUixLQUFkLEVBQXFCQyxHQUFyQixDQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUFZTyxTQUFTUSxLQUFULENBQWVDLFFBQWYsRUFBeUM7QUFFL0MsU0FBT0MsSUFBSSxDQUFDQyxNQUFMLENBQVlGLFFBQVosQ0FBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUFXTyxTQUFTRyxPQUFULENBQWlCSixLQUFqQixFQUFrRDtBQUV2RDtBQUNBLE1BQUlBLEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBRyxDQUF6QixFQUE0QixPQUFPLElBQVAsQ0FBNUIsS0FFSyxJQUFJRSxJQUFJLENBQUNHLEtBQUwsQ0FBV0wsS0FBWCxDQUFKLEVBQXVCLE9BQU9FLElBQUksQ0FBQ0ksYUFBTCxDQUFtQk4sS0FBbkIsQ0FBUCxDQUF2QixLQUVBLE9BQU8sS0FBUDtBQUVOIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgKiBhcyBjYWxjIGZyb20gJy4vY2FsYyc7XHJcblxyXG4vKipcclxuICogRmlidGFzdGljIHByb3ZpZGVzIG1ldGhvZHMgdG8gZWFzaWx5IHdvcmsgd2l0aCB0aGUgRmlib25hY2NpIHNlcXVlbmNlLlxyXG4gKiBcclxuICogQGF1dGhvciBSb2JlcnQgQ29ycG9ub2kgPHJvYmVydGNvcnBvbm9pQGdtYWlsLmNvbT5cclxuICogXHJcbiAqIEB2ZXJzaW9uIDIuMC4wXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEdldCBhbiBhcnJheSBvZiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIGZyb20gYSBzcGVjaWZpZWQgc3RhcnQgbG9jYXRpb24gdG8gYSBzcGVjaWZpZWQgZW5kIGxvY2F0aW9uLlxyXG4gKiBcclxuICogSWYgb25seSBvbmUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCwgaXQgd2lsbCBiZSBhc3N1bWVkIHRoYXQgb25seSB0aGUgZW5kIGxvY2F0aW9uIGlzIHNwZWNpZmllZCBtZWFuaW5nXHJcbiAqIHRoZSBzdGFydCBsb2NhdGlvbiB3aWxsIGJlIHplcm8uXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgdGhlIHRlcm0gJ2xvY2F0aW9uJyBpcyB1c2VkIGluc3RlYWQgb2YgJ2luZGV4Jy4gVGhpcyBpcyBiZWNhdXNlIHdlIHNlZSB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlXHJcbiAqIEZpYm9ubmFjaSBzZXF1ZW5jZSBhcyBiZWluZyAwLCBpbnN0ZWFkIG9mIHRoZSAwdGggaW5kZXggYmVpbmcgMC5cclxuICogXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgbG9jYXRpb24gaW4gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSB0byBiZWdpbiByZXRyaWV2aW5nIHZhbHVlcyBmcm9tLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBsb2NhdGlvbiBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIHRvIHN0b3AgcmV0cmlldmluZyB2YWx1ZXMgZnJvbS5cclxuICogXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgb2YgdmFsdWVzIGZyb20gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSBmcm9tIHRoZSBzdGFydCB0byBlbmQgbG9jYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XHJcblxyXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcclxuXHJcblx0XHRzdGFydCA9IDA7XHJcblx0XHRlbmQgPSBhcmd1bWVudHNbMF07XHJcblxyXG5cdH1cclxuXHRlbHNlIHN0YXJ0IC09IDE7XHJcblxyXG5cdC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIGZpcnN0IHR3byB2YWx1ZXMgb2YgdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSBhcyB0aGV5IGFyZSBpcnJlZ3VsYXJcclxuXHQvLyBjb21wYXJlZCB0byB0aGUgd2hvbGUuXHJcblx0bGV0IHJlc3VsdDogQXJyYXk8bnVtYmVyPiA9IFswLCAxXTtcclxuXHJcblx0Ly8gSWYgdGhlIHVzZXIgb25seSB3YW50cyBvbmUgb3IgdHdvIG9mIHRoZSBmaXJzdCB2YWx1ZXMsIHdlIGFscmVhZHkgc2F2ZWQgdGhlbSBzbyBqdXN0IHJldHVyblxyXG5cdC8vIHRoZSBzbGljZSB0aGV5IG5lZWQuXHJcblx0aWYgKGVuZCA8PSAyKSByZXR1cm4gcmVzdWx0LnNsaWNlKDAsIGVuZCk7XHJcblxyXG5cdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBlbmQ7ICsraSkge1xyXG5cclxuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZTogbnVtYmVyID0gaSArIDI7XHJcblxyXG5cdFx0cmVzdWx0W2N1cnJlbnRWYWx1ZV0gPSByZXN1bHRbY3VycmVudFZhbHVlIC0gMV0gKyByZXN1bHRbY3VycmVudFZhbHVlIC0gMl07XHJcblxyXG5cdH1cclxuXHJcblx0cmVzdWx0ID0gcmVzdWx0LnNsaWNlKDEsIGVuZCArIDEpO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0LnNwbGljZShzdGFydCwgZW5kKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIEZpYm9uYWNjaSB2YWx1ZSBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uIGluIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UuXHJcbiAqIFxyXG4gKiBUaGlzIG1ldGhvZCB1c2VzIHRoZSBiaW5ldCdzIGZvcm11bGEgd2hpY2ggaXMgdXNlZCB0byBmaW5kIGEgRmlib25hY2NpIHZhbHVlXHJcbiAqIGF0IGEgc3BlY2lmaWMgbG9jYXRpb24gd2l0aG91dCBoYXZpbmcgdG8gbG9vcCB0aHJvdWdoIHRoZSB3aG9sZSBzZXF1ZW5jZS5cclxuICogXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IGxvY2F0aW9uIFRoZSBsb2NhdGlvbiBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIHRvIGdldCB0aGUgRmlib25hY2NpIHZhbHVlIGZyb20uXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgRmlib25hY2NpIHZhbHVlIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsdWUobG9jYXRpb246IG51bWJlcik6IG51bWJlciB7XHJcblxyXG5cdHJldHVybiBjYWxjLmJpbmV0cyhsb2NhdGlvbik7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgd2hldGhlciBhIHNwZWNpZmllZCB2YWx1ZSBpcyBhIHBhcnQgb2YgdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSBvciBub3QuXHJcbiAqIFxyXG4gKiBEdWUgdG8gdGhlIHJlc3RyaWN0aW9ucyBvZiB0aGUgaW52ZXJzZSBCaW5ldCdzIGZvcm11bGEsIHRoaXMgd2lsbCByZXR1cm4gdHJ1ZVxyXG4gKiBpZiB0aGUgZXhhY3QgbG9jYXRpb24gb2YgdGhlIHZhbHVlIGNhbiBiZSBkZXRlcm1pbmVkIGluIHRoZSBzZXF1ZW5jZSBvciBmYWxzZVxyXG4gKiBvdGhlcndpc2UuXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrIGlmIGV4aXN0cyBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIG9yIG5vdC5cclxuICogXHJcbiAqIEByZXR1cm5zIHtib29sZWFufG51bWJlcn0gUmV0dXJuIHRoZSBsb2NhdGlvbiBvZiB0aGUgdmFsdWUgaW4gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSBvciBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlKHZhbHVlOiBudW1iZXIpOiAoYm9vbGVhbnxudW1iZXIpIHtcclxuXHJcbiAgLy8gVGhlIHZhbHVlIGZhbGxzIHdpdGhpbiBvbmUgb2YgdGhlIGZpcnN0IHR3byBudW1iZXJzLlxyXG4gIGlmICh2YWx1ZSA+IDAgJiYgdmFsdWUgPCAyKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgZWxzZSBpZiAoY2FsYy5pc0ZpYih2YWx1ZSkpIHJldHVybiBjYWxjLmludmVyc2VCaW5ldHModmFsdWUpO1xyXG5cclxuICBlbHNlIHJldHVybiBmYWxzZTtcclxuXHJcbn0iXX0=