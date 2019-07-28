'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
exports.value = value;
exports.isValue = isValue;

var calc = _interopRequireWildcard(require("./calc"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJzZXF1ZW5jZSIsInN0YXJ0IiwiZW5kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicmVzdWx0Iiwic2xpY2UiLCJpIiwiY3VycmVudFZhbHVlIiwic3BsaWNlIiwidmFsdWUiLCJsb2NhdGlvbiIsImNhbGMiLCJiaW5ldHMiLCJpc1ZhbHVlIiwiaXNGaWIiLCJpbnZlcnNlQmluZXRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7Ozs7QUFFQTs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUFpQ0MsR0FBakMsRUFBNkQ7QUFFbkUsTUFBSUMsU0FBUyxDQUFDQyxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBRTFCSCxJQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNBQyxJQUFBQSxHQUFHLEdBQUdDLFNBQVMsQ0FBQyxDQUFELENBQWY7QUFFQSxHQUxELE1BTUtGLEtBQUssSUFBSSxDQUFULENBUjhELENBVW5FO0FBQ0E7OztBQUNBLE1BQUlJLE1BQXFCLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE1QixDQVptRSxDQWNuRTtBQUNBOztBQUNBLE1BQUlILEdBQUcsSUFBSSxDQUFYLEVBQWMsT0FBT0csTUFBTSxDQUFDQyxLQUFQLENBQWEsQ0FBYixFQUFnQkosR0FBaEIsQ0FBUDs7QUFFZCxPQUFLLElBQUlLLENBQVMsR0FBRyxDQUFyQixFQUF3QkEsQ0FBQyxHQUFHTCxHQUE1QixFQUFpQyxFQUFFSyxDQUFuQyxFQUFzQztBQUVyQyxRQUFNQyxZQUFvQixHQUFHRCxDQUFDLEdBQUcsQ0FBakM7QUFFQUYsSUFBQUEsTUFBTSxDQUFDRyxZQUFELENBQU4sR0FBdUJILE1BQU0sQ0FBQ0csWUFBWSxHQUFHLENBQWhCLENBQU4sR0FBMkJILE1BQU0sQ0FBQ0csWUFBWSxHQUFHLENBQWhCLENBQXhEO0FBRUE7O0FBRURILEVBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxLQUFQLENBQWEsQ0FBYixFQUFnQkosR0FBRyxHQUFHLENBQXRCLENBQVQ7QUFFQSxTQUFPRyxNQUFNLENBQUNJLE1BQVAsQ0FBY1IsS0FBZCxFQUFxQkMsR0FBckIsQ0FBUDtBQUVBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU1EsS0FBVCxDQUFlQyxRQUFmLEVBQXlDO0FBRS9DLFNBQU9DLElBQUksQ0FBQ0MsTUFBTCxDQUFZRixRQUFaLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7O0FBV08sU0FBU0csT0FBVCxDQUFpQkosS0FBakIsRUFBa0Q7QUFFdkQ7QUFDQSxNQUFJQSxLQUFLLEdBQUcsQ0FBUixJQUFhQSxLQUFLLEdBQUcsQ0FBekIsRUFBNEIsT0FBTyxJQUFQLENBQTVCLEtBRUssSUFBSUUsSUFBSSxDQUFDRyxLQUFMLENBQVdMLEtBQVgsQ0FBSixFQUF1QixPQUFPRSxJQUFJLENBQUNJLGFBQUwsQ0FBbUJOLEtBQW5CLENBQVAsQ0FBdkIsS0FFQSxPQUFPLEtBQVA7QUFFTiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0ICogYXMgY2FsYyBmcm9tICcuL2NhbGMnO1xyXG5cclxuLyoqXHJcbiAqIEZpYnRhc3RpYyBwcm92aWRlcyBtZXRob2RzIHRvIGVhc2lseSB3b3JrIHdpdGggdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZS5cclxuICogXHJcbiAqIEBhdXRob3IgUm9iZXJ0IENvcnBvbm9pIDxyb2JlcnRjb3Jwb25vaUBnbWFpbC5jb20+XHJcbiAqIFxyXG4gKiBAdmVyc2lvbiAyLjAuMFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBHZXQgYW4gYXJyYXkgb2YgdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSBmcm9tIGEgc3BlY2lmaWVkIHN0YXJ0IGxvY2F0aW9uIHRvIGEgc3BlY2lmaWVkIGVuZCBsb2NhdGlvbi5cclxuICogXHJcbiAqIElmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgYXNzdW1lZCB0aGF0IG9ubHkgdGhlIGVuZCBsb2NhdGlvbiBpcyBzcGVjaWZpZWQgbWVhbmluZ1xyXG4gKiB0aGUgc3RhcnQgbG9jYXRpb24gd2lsbCBiZSB6ZXJvLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHRoZSB0ZXJtICdsb2NhdGlvbicgaXMgdXNlZCBpbnN0ZWFkIG9mICdpbmRleCcuIFRoaXMgaXMgYmVjYXVzZSB3ZSBzZWUgdGhlIGZpcnN0IHZhbHVlIG9mIHRoZVxyXG4gKiBGaWJvbm5hY2kgc2VxdWVuY2UgYXMgYmVpbmcgMCwgaW5zdGVhZCBvZiB0aGUgMHRoIGluZGV4IGJlaW5nIDAuXHJcbiAqIFxyXG4gKiBAc2luY2UgMC4xLjBcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIGxvY2F0aW9uIGluIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UgdG8gYmVnaW4gcmV0cmlldmluZyB2YWx1ZXMgZnJvbS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgbG9jYXRpb24gaW4gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSB0byBzdG9wIHJldHJpZXZpbmcgdmFsdWVzIGZyb20uXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IG9mIHZhbHVlcyBmcm9tIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UgZnJvbSB0aGUgc3RhcnQgdG8gZW5kIGxvY2F0aW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IEFycmF5PG51bWJlcj4ge1xyXG5cclxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHJcblxyXG5cdFx0c3RhcnQgPSAwO1xyXG5cdFx0ZW5kID0gYXJndW1lbnRzWzBdO1xyXG5cclxuXHR9XHJcblx0ZWxzZSBzdGFydCAtPSAxO1xyXG5cclxuXHQvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBmaXJzdCB0d28gdmFsdWVzIG9mIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UgYXMgdGhleSBhcmUgaXJyZWd1bGFyXHJcblx0Ly8gY29tcGFyZWQgdG8gdGhlIHdob2xlLlxyXG5cdGxldCByZXN1bHQ6IEFycmF5PG51bWJlcj4gPSBbMCwgMV07XHJcblxyXG5cdC8vIElmIHRoZSB1c2VyIG9ubHkgd2FudHMgb25lIG9yIHR3byBvZiB0aGUgZmlyc3QgdmFsdWVzLCB3ZSBhbHJlYWR5IHNhdmVkIHRoZW0gc28ganVzdCByZXR1cm5cclxuXHQvLyB0aGUgc2xpY2UgdGhleSBuZWVkLlxyXG5cdGlmIChlbmQgPD0gMikgcmV0dXJuIHJlc3VsdC5zbGljZSgwLCBlbmQpO1xyXG5cclxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZW5kOyArK2kpIHtcclxuXHJcblx0XHRjb25zdCBjdXJyZW50VmFsdWU6IG51bWJlciA9IGkgKyAyO1xyXG5cclxuXHRcdHJlc3VsdFtjdXJyZW50VmFsdWVdID0gcmVzdWx0W2N1cnJlbnRWYWx1ZSAtIDFdICsgcmVzdWx0W2N1cnJlbnRWYWx1ZSAtIDJdO1xyXG5cclxuXHR9XHJcblxyXG5cdHJlc3VsdCA9IHJlc3VsdC5zbGljZSgxLCBlbmQgKyAxKTtcclxuXHJcblx0cmV0dXJuIHJlc3VsdC5zcGxpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBGaWJvbmFjY2kgdmFsdWUgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbiBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlLlxyXG4gKiBcclxuICogVGhpcyBtZXRob2QgdXNlcyB0aGUgYmluZXQncyBmb3JtdWxhIHdoaWNoIGlzIHVzZWQgdG8gZmluZCBhIEZpYm9uYWNjaSB2YWx1ZVxyXG4gKiBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIHdpdGhvdXQgaGF2aW5nIHRvIGxvb3AgdGhyb3VnaCB0aGUgd2hvbGUgc2VxdWVuY2UuXHJcbiAqIFxyXG4gKiBAc2luY2UgMC4xLjBcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsb2NhdGlvbiBUaGUgbG9jYXRpb24gaW4gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSB0byBnZXQgdGhlIEZpYm9uYWNjaSB2YWx1ZSBmcm9tLlxyXG4gKiBcclxuICogQHJldHVybnMge251bWJlcn0gVGhlIEZpYm9uYWNjaSB2YWx1ZSBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlKGxvY2F0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG5cclxuXHRyZXR1cm4gY2FsYy5iaW5ldHMobG9jYXRpb24pO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIHdoZXRoZXIgYSBzcGVjaWZpZWQgdmFsdWUgaXMgYSBwYXJ0IG9mIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2Ugb3Igbm90LlxyXG4gKiBcclxuICogRHVlIHRvIHRoZSByZXN0cmljdGlvbnMgb2YgdGhlIGludmVyc2UgQmluZXQncyBmb3JtdWxhLCB0aGlzIHdpbGwgcmV0dXJuIHRydWVcclxuICogaWYgdGhlIGV4YWN0IGxvY2F0aW9uIG9mIHRoZSB2YWx1ZSBjYW4gYmUgZGV0ZXJtaW5lZCBpbiB0aGUgc2VxdWVuY2Ugb3IgZmFsc2VcclxuICogb3RoZXJ3aXNlLlxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjayBpZiBleGlzdHMgaW4gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZSBvciBub3QuXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxudW1iZXJ9IFJldHVybiB0aGUgbG9jYXRpb24gb2YgdGhlIHZhbHVlIGluIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2Ugb3IgZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZSh2YWx1ZTogbnVtYmVyKTogKGJvb2xlYW58bnVtYmVyKSB7XHJcblxyXG4gIC8vIFRoZSB2YWx1ZSBmYWxscyB3aXRoaW4gb25lIG9mIHRoZSBmaXJzdCB0d28gbnVtYmVycy5cclxuICBpZiAodmFsdWUgPiAwICYmIHZhbHVlIDwgMikgcmV0dXJuIHRydWU7XHJcblxyXG4gIGVsc2UgaWYgKGNhbGMuaXNGaWIodmFsdWUpKSByZXR1cm4gY2FsYy5pbnZlcnNlQmluZXRzKHZhbHVlKTtcclxuXHJcbiAgZWxzZSByZXR1cm4gZmFsc2U7XHJcblxyXG59Il19