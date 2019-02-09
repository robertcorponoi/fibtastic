'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
exports.value = value;
exports.isValue = isValue;

var calc = _interopRequireWildcard(require("./calc"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJzZXF1ZW5jZSIsInN0YXJ0IiwiZW5kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicmVzdWx0Iiwic2xpY2UiLCJpIiwiY3VycmVudFZhbHVlIiwic3BsaWNlIiwidmFsdWUiLCJsb2NhdGlvbiIsImNhbGMiLCJiaW5ldHMiLCJpc1ZhbHVlIiwiaXNGaWIiLCJpbnZlcnNlQmluZXRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7Ozs7QUFFQTs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUFpQ0MsR0FBakMsRUFBNkQ7QUFFbkUsTUFBSUMsU0FBUyxDQUFDQyxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBRTFCSCxJQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNBQyxJQUFBQSxHQUFHLEdBQUdDLFNBQVMsQ0FBQyxDQUFELENBQWY7QUFFQSxHQUxELE1BTUtGLEtBQUssSUFBSSxDQUFULENBUjhELENBVW5FO0FBQ0E7OztBQUNBLE1BQUlJLE1BQXFCLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE1QixDQVptRSxDQWNuRTtBQUNBOztBQUNBLE1BQUlILEdBQUcsSUFBSSxDQUFYLEVBQWMsT0FBT0csTUFBTSxDQUFDQyxLQUFQLENBQWEsQ0FBYixFQUFnQkosR0FBaEIsQ0FBUDs7QUFFZCxPQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLEdBQXBCLEVBQXlCLEVBQUVLLENBQTNCLEVBQThCO0FBRTdCLFFBQU1DLFlBQVksR0FBR0QsQ0FBQyxHQUFHLENBQXpCO0FBRUFGLElBQUFBLE1BQU0sQ0FBQ0csWUFBRCxDQUFOLEdBQXVCSCxNQUFNLENBQUNHLFlBQVksR0FBRyxDQUFoQixDQUFOLEdBQTJCSCxNQUFNLENBQUNHLFlBQVksR0FBRyxDQUFoQixDQUF4RDtBQUVBOztBQUVESCxFQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLENBQWIsRUFBZ0JKLEdBQUcsR0FBRyxDQUF0QixDQUFUO0FBRUEsU0FBT0csTUFBTSxDQUFDSSxNQUFQLENBQWNSLEtBQWQsRUFBcUJDLEdBQXJCLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNRLEtBQVQsQ0FBZUMsUUFBZixFQUF5QztBQUUvQyxTQUFPQyxJQUFJLENBQUNDLE1BQUwsQ0FBWUYsUUFBWixDQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7Ozs7OztBQVdPLFNBQVNHLE9BQVQsQ0FBaUJKLEtBQWpCLEVBQWtEO0FBRXZEO0FBQ0EsTUFBSUEsS0FBSyxHQUFHLENBQVIsSUFBYUEsS0FBSyxHQUFHLENBQXpCLEVBQTRCLE9BQU8sSUFBUCxDQUE1QixLQUVLLElBQUlFLElBQUksQ0FBQ0csS0FBTCxDQUFXTCxLQUFYLENBQUosRUFBdUIsT0FBT0UsSUFBSSxDQUFDSSxhQUFMLENBQW1CTixLQUFuQixDQUFQLENBQXZCLEtBRUEsT0FBTyxLQUFQO0FBRU4iLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9jYWxjJztcclxuXHJcbi8qKlxyXG4gKiBGaWJ0YXN0aWMgcHJvdmlkZXMgbWV0aG9kcyB0byBlYXNpbHkgd29yayB3aXRoIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxyXG4gKiBcclxuICogQHZlcnNpb24gMS4wLjBcclxuICovXHJcblxyXG4vKipcclxuICogR2V0IGFuIGFycmF5IG9mIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UgZnJvbSBhIHNwZWNpZmllZCBzdGFydCBsb2NhdGlvbiB0byBhIHNwZWNpZmllZCBlbmQgbG9jYXRpb24uXHJcbiAqIFxyXG4gKiBJZiBvbmx5IG9uZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIGFzc3VtZWQgdGhhdCBvbmx5IHRoZSBlbmQgbG9jYXRpb24gaXMgc3BlY2lmaWVkIG1lYW5pbmdcclxuICogdGhlIHN0YXJ0IGxvY2F0aW9uIHdpbGwgYmUgemVyby5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB0aGUgdGVybSAnbG9jYXRpb24nIGlzIHVzZWQgaW5zdGVhZCBvZiAnaW5kZXgnLiBUaGlzIGlzIGJlY2F1c2Ugd2Ugc2VlIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGVcclxuICogRmlib25uYWNpIHNlcXVlbmNlIGFzIGJlaW5nIDAsIGluc3RlYWQgb2YgdGhlIDB0aCBpbmRleCBiZWluZyAwLlxyXG4gKiBcclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBsb2NhdGlvbiBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIHRvIGJlZ2luIHJldHJpZXZpbmcgdmFsdWVzIGZyb20uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGxvY2F0aW9uIGluIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UgdG8gc3RvcCByZXRyaWV2aW5nIHZhbHVlcyBmcm9tLlxyXG4gKiBcclxuICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiB2YWx1ZXMgZnJvbSB0aGUgRmlib25hY2NpIHNlcXVlbmNlIGZyb20gdGhlIHN0YXJ0IHRvIGVuZCBsb2NhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcclxuXHJcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG5cclxuXHRcdHN0YXJ0ID0gMDtcclxuXHRcdGVuZCA9IGFyZ3VtZW50c1swXTtcclxuXHJcblx0fVxyXG5cdGVsc2Ugc3RhcnQgLT0gMTtcclxuXHJcblx0Ly8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgZmlyc3QgdHdvIHZhbHVlcyBvZiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIGFzIHRoZXkgYXJlIGlycmVndWxhclxyXG5cdC8vIGNvbXBhcmVkIHRvIHRoZSB3aG9sZS5cclxuXHRsZXQgcmVzdWx0OiBBcnJheTxudW1iZXI+ID0gWzAsIDFdO1xyXG5cclxuXHQvLyBJZiB0aGUgdXNlciBvbmx5IHdhbnRzIG9uZSBvciB0d28gb2YgdGhlIGZpcnN0IHZhbHVlcywgd2UgYWxyZWFkeSBzYXZlZCB0aGVtIHNvIGp1c3QgcmV0dXJuXHJcblx0Ly8gdGhlIHNsaWNlIHRoZXkgbmVlZC5cclxuXHRpZiAoZW5kIDw9IDIpIHJldHVybiByZXN1bHQuc2xpY2UoMCwgZW5kKTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbmQ7ICsraSkge1xyXG5cclxuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGkgKyAyO1xyXG5cclxuXHRcdHJlc3VsdFtjdXJyZW50VmFsdWVdID0gcmVzdWx0W2N1cnJlbnRWYWx1ZSAtIDFdICsgcmVzdWx0W2N1cnJlbnRWYWx1ZSAtIDJdO1xyXG5cclxuXHR9XHJcblxyXG5cdHJlc3VsdCA9IHJlc3VsdC5zbGljZSgxLCBlbmQgKyAxKTtcclxuXHJcblx0cmV0dXJuIHJlc3VsdC5zcGxpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBGaWJvbmFjY2kgdmFsdWUgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbiBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlLlxyXG4gKiBcclxuICogVGhpcyBtZXRob2QgdXNlcyB0aGUgYmluZXQncyBmb3JtdWxhIHdoaWNoIGlzIHVzZWQgdG8gZmluZCBhIEZpYm9uYWNjaSB2YWx1ZVxyXG4gKiBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIHdpdGhvdXQgaGF2aW5nIHRvIGxvb3AgdGhyb3VnaCB0aGUgd2hvbGUgc2VxdWVuY2UuXHJcbiAqIFxyXG4gKiBAc2luY2UgMC4xLjBcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsb2NhdGlvbiBUaGUgbG9jYXRpb24gaW4gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSB0byBnZXQgdGhlIEZpYm9uYWNjaSB2YWx1ZSBmcm9tLlxyXG4gKiBcclxuICogQHJldHVybnMge251bWJlcn0gVGhlIEZpYm9uYWNjaSB2YWx1ZSBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlKGxvY2F0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG5cclxuXHRyZXR1cm4gY2FsYy5iaW5ldHMobG9jYXRpb24pO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIHdoZXRoZXIgYSBzcGVjaWZpZWQgdmFsdWUgaXMgYSBwYXJ0IG9mIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2Ugb3Igbm90LlxyXG4gKiBcclxuICogRHVlIHRvIHRoZSByZXN0cmljdGlvbnMgb2YgdGhlIGludmVyc2UgQmluZXQncyBmb3JtdWxhLCB0aGlzIHdpbGwgcmV0dXJuIHRydWVcclxuICogaWYgdGhlIGV4YWN0IGxvY2F0aW9uIG9mIHRoZSB2YWx1ZSBjYW4gYmUgZGV0ZXJtaW5lZCBpbiB0aGUgc2VxdWVuY2Ugb3IgZmFsc2VcclxuICogb3RoZXJ3aXNlLlxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjayBpZiBleGlzdHMgaW4gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSBvciBub3QuXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxudW1iZXJ9IFJldHVybiB0aGUgbG9jYXRpb24gb2YgdGhlIHZhbHVlIGluIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2Ugb3IgZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZSh2YWx1ZTogbnVtYmVyKTogKGJvb2xlYW58bnVtYmVyKSB7XHJcblxyXG4gIC8vIFRoZSB2YWx1ZSBmYWxscyB3aXRoaW4gb25lIG9mIHRoZSBmaXJzdCB0d28gbnVtYmVycy5cclxuICBpZiAodmFsdWUgPiAwICYmIHZhbHVlIDwgMikgcmV0dXJuIHRydWU7XHJcblxyXG4gIGVsc2UgaWYgKGNhbGMuaXNGaWIodmFsdWUpKSByZXR1cm4gY2FsYy5pbnZlcnNlQmluZXRzKHZhbHVlKTtcclxuXHJcbiAgZWxzZSByZXR1cm4gZmFsc2U7XHJcblxyXG59Il19