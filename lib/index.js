'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
exports.value = value;
exports.isValue = isValue;

var calc = _interopRequireWildcard(require("./calc"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJzZXF1ZW5jZSIsInN0YXJ0IiwiZW5kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicmVzdWx0Iiwic2xpY2UiLCJpIiwiY3VycmVudFZhbHVlIiwic3BsaWNlIiwidmFsdWUiLCJsb2NhdGlvbiIsImNhbGMiLCJiaW5ldHMiLCJpc1ZhbHVlIiwiaXNGaWIiLCJpbnZlcnNlQmluZXRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBaUNDLEdBQWpDLEVBQTZEO0FBRW5FLE1BQUlDLFNBQVMsQ0FBQ0MsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUUxQkgsSUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDQUMsSUFBQUEsR0FBRyxHQUFHQyxTQUFTLENBQUMsQ0FBRCxDQUFmO0FBRUEsR0FMRCxNQU1LRixLQUFLLElBQUksQ0FBVCxDQVI4RCxDQVVuRTtBQUNBOzs7QUFDQSxNQUFJSSxNQUFxQixHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBNUIsQ0FabUUsQ0FjbkU7QUFDQTs7QUFDQSxNQUFJSCxHQUFHLElBQUksQ0FBWCxFQUFjLE9BQU9HLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLENBQWIsRUFBZ0JKLEdBQWhCLENBQVA7O0FBRWQsT0FBSyxJQUFJSyxDQUFTLEdBQUcsQ0FBckIsRUFBd0JBLENBQUMsR0FBR0wsR0FBNUIsRUFBaUMsRUFBRUssQ0FBbkMsRUFBc0M7QUFFckMsUUFBTUMsWUFBb0IsR0FBR0QsQ0FBQyxHQUFHLENBQWpDO0FBRUFGLElBQUFBLE1BQU0sQ0FBQ0csWUFBRCxDQUFOLEdBQXVCSCxNQUFNLENBQUNHLFlBQVksR0FBRyxDQUFoQixDQUFOLEdBQTJCSCxNQUFNLENBQUNHLFlBQVksR0FBRyxDQUFoQixDQUF4RDtBQUVBOztBQUVESCxFQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLENBQWIsRUFBZ0JKLEdBQUcsR0FBRyxDQUF0QixDQUFUO0FBRUEsU0FBT0csTUFBTSxDQUFDSSxNQUFQLENBQWNSLEtBQWQsRUFBcUJDLEdBQXJCLENBQVA7QUFFQTtBQUVEOzs7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNRLEtBQVQsQ0FBZUMsUUFBZixFQUF5QztBQUUvQyxTQUFPQyxJQUFJLENBQUNDLE1BQUwsQ0FBWUYsUUFBWixDQUFQO0FBRUE7QUFFRDs7Ozs7Ozs7Ozs7OztBQVdPLFNBQVNHLE9BQVQsQ0FBaUJKLEtBQWpCLEVBQWtEO0FBRXZEO0FBQ0EsTUFBSUEsS0FBSyxHQUFHLENBQVIsSUFBYUEsS0FBSyxHQUFHLENBQXpCLEVBQTRCLE9BQU8sSUFBUCxDQUE1QixLQUVLLElBQUlFLElBQUksQ0FBQ0csS0FBTCxDQUFXTCxLQUFYLENBQUosRUFBdUIsT0FBT0UsSUFBSSxDQUFDSSxhQUFMLENBQW1CTixLQUFuQixDQUFQLENBQXZCLEtBRUEsT0FBTyxLQUFQO0FBRU4iLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9jYWxjJztcclxuXHJcbi8qKlxyXG4gKiBGaWJ0YXN0aWMgcHJvdmlkZXMgbWV0aG9kcyB0byBlYXNpbHkgd29yayB3aXRoIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIFJvYmVydCBDb3Jwb25vaSA8cm9iZXJ0Y29ycG9ub2lAZ21haWwuY29tPlxyXG4gKiBcclxuICogQHZlcnNpb24gMi4wLjBcclxuICovXHJcblxyXG4vKipcclxuICogR2V0IGFuIGFycmF5IG9mIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UgZnJvbSBhIHNwZWNpZmllZCBzdGFydCBsb2NhdGlvbiB0byBhIHNwZWNpZmllZCBlbmQgbG9jYXRpb24uXHJcbiAqIFxyXG4gKiBJZiBvbmx5IG9uZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIGFzc3VtZWQgdGhhdCBvbmx5IHRoZSBlbmQgbG9jYXRpb24gaXMgc3BlY2lmaWVkIG1lYW5pbmdcclxuICogdGhlIHN0YXJ0IGxvY2F0aW9uIHdpbGwgYmUgemVyby5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB0aGUgdGVybSAnbG9jYXRpb24nIGlzIHVzZWQgaW5zdGVhZCBvZiAnaW5kZXgnLiBUaGlzIGlzIGJlY2F1c2Ugd2Ugc2VlIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGVcclxuICogRmlib25uYWNpIHNlcXVlbmNlIGFzIGJlaW5nIDAsIGluc3RlYWQgb2YgdGhlIDB0aCBpbmRleCBiZWluZyAwLlxyXG4gKiBcclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBsb2NhdGlvbiBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIHRvIGJlZ2luIHJldHJpZXZpbmcgdmFsdWVzIGZyb20uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGxvY2F0aW9uIGluIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UgdG8gc3RvcCByZXRyaWV2aW5nIHZhbHVlcyBmcm9tLlxyXG4gKiBcclxuICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiB2YWx1ZXMgZnJvbSB0aGUgRmlib25hY2NpIHNlcXVlbmNlIGZyb20gdGhlIHN0YXJ0IHRvIGVuZCBsb2NhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcclxuXHJcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG5cclxuXHRcdHN0YXJ0ID0gMDtcclxuXHRcdGVuZCA9IGFyZ3VtZW50c1swXTtcclxuXHJcblx0fVxyXG5cdGVsc2Ugc3RhcnQgLT0gMTtcclxuXHJcblx0Ly8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgZmlyc3QgdHdvIHZhbHVlcyBvZiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIGFzIHRoZXkgYXJlIGlycmVndWxhclxyXG5cdC8vIGNvbXBhcmVkIHRvIHRoZSB3aG9sZS5cclxuXHRsZXQgcmVzdWx0OiBBcnJheTxudW1iZXI+ID0gWzAsIDFdO1xyXG5cclxuXHQvLyBJZiB0aGUgdXNlciBvbmx5IHdhbnRzIG9uZSBvciB0d28gb2YgdGhlIGZpcnN0IHZhbHVlcywgd2UgYWxyZWFkeSBzYXZlZCB0aGVtIHNvIGp1c3QgcmV0dXJuXHJcblx0Ly8gdGhlIHNsaWNlIHRoZXkgbmVlZC5cclxuXHRpZiAoZW5kIDw9IDIpIHJldHVybiByZXN1bHQuc2xpY2UoMCwgZW5kKTtcclxuXHJcblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGVuZDsgKytpKSB7XHJcblxyXG5cdFx0Y29uc3QgY3VycmVudFZhbHVlOiBudW1iZXIgPSBpICsgMjtcclxuXHJcblx0XHRyZXN1bHRbY3VycmVudFZhbHVlXSA9IHJlc3VsdFtjdXJyZW50VmFsdWUgLSAxXSArIHJlc3VsdFtjdXJyZW50VmFsdWUgLSAyXTtcclxuXHJcblx0fVxyXG5cclxuXHRyZXN1bHQgPSByZXN1bHQuc2xpY2UoMSwgZW5kICsgMSk7XHJcblxyXG5cdHJldHVybiByZXN1bHQuc3BsaWNlKHN0YXJ0LCBlbmQpO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgRmlib25hY2NpIHZhbHVlIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gaW4gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZS5cclxuICogXHJcbiAqIFRoaXMgbWV0aG9kIHVzZXMgdGhlIGJpbmV0J3MgZm9ybXVsYSB3aGljaCBpcyB1c2VkIHRvIGZpbmQgYSBGaWJvbmFjY2kgdmFsdWVcclxuICogYXQgYSBzcGVjaWZpYyBsb2NhdGlvbiB3aXRob3V0IGhhdmluZyB0byBsb29wIHRocm91Z2ggdGhlIHdob2xlIHNlcXVlbmNlLlxyXG4gKiBcclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbG9jYXRpb24gVGhlIGxvY2F0aW9uIGluIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UgdG8gZ2V0IHRoZSBGaWJvbmFjY2kgdmFsdWUgZnJvbS5cclxuICogXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBGaWJvbmFjY2kgdmFsdWUgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZShsb2NhdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcclxuXHJcblx0cmV0dXJuIGNhbGMuYmluZXRzKGxvY2F0aW9uKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayB3aGV0aGVyIGEgc3BlY2lmaWVkIHZhbHVlIGlzIGEgcGFydCBvZiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIG9yIG5vdC5cclxuICogXHJcbiAqIER1ZSB0byB0aGUgcmVzdHJpY3Rpb25zIG9mIHRoZSBpbnZlcnNlIEJpbmV0J3MgZm9ybXVsYSwgdGhpcyB3aWxsIHJldHVybiB0cnVlXHJcbiAqIGlmIHRoZSBleGFjdCBsb2NhdGlvbiBvZiB0aGUgdmFsdWUgY2FuIGJlIGRldGVybWluZWQgaW4gdGhlIHNlcXVlbmNlIG9yIGZhbHNlXHJcbiAqIG90aGVyd2lzZS5cclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2sgaWYgZXhpc3RzIGluIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2Ugb3Igbm90LlxyXG4gKiBcclxuICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfSBSZXR1cm4gdGhlIGxvY2F0aW9uIG9mIHRoZSB2YWx1ZSBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIG9yIGZhbHNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWUodmFsdWU6IG51bWJlcik6IChib29sZWFufG51bWJlcikge1xyXG5cclxuICAvLyBUaGUgdmFsdWUgZmFsbHMgd2l0aGluIG9uZSBvZiB0aGUgZmlyc3QgdHdvIG51bWJlcnMuXHJcbiAgaWYgKHZhbHVlID4gMCAmJiB2YWx1ZSA8IDIpIHJldHVybiB0cnVlO1xyXG5cclxuICBlbHNlIGlmIChjYWxjLmlzRmliKHZhbHVlKSkgcmV0dXJuIGNhbGMuaW52ZXJzZUJpbmV0cyh2YWx1ZSk7XHJcblxyXG4gIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG5cclxufSJdfQ==