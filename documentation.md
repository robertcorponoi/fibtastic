<h1 style="text-align: center;">Fibtastic</h1>

## **Sequence**
Sequence takes an options object as a parameter and it returns the Fibonacci sequence from the specified start point to the specified end point.

```js
fibonacci.sequence({ start: 10, end: 15 });
// Returns [55, 89, 144, 233, 377, 610]
```

- ```start``` : (optional) This is the location in the Fibonacci sequence where you want the results to start. This start value is included in the result meaning it does not just return the values after the start value it also includes it.

- ```end``` : (required) This is the location in the Fibonacci sequence where you want the results to end. Just like the start value, the value at this location is also included in the result. If you don't specify an end it will throw an error prompting you to do so.

## **Value**
Value takes a single location parameter and returns the Fibonacci value at that sequence location.

```js
fibonacci.value(20);
// Returns 6765
```

- ```location``` : (required) The location in Fibonacci sequence to get value from. For example if you input 10 as the location, the result will be the 10th number in the Fibonacci sequence, which is 55.

## **isValue**
IsValue takes in any integer and checks if that number is a part of the Fibonacci sequence and returns the location of the value in the Fibonacci sequence or false if the value is not in the sequence at all.

_**Note**: If the value is less than 2 but greater than 0 it will just return true because the value 1 occurs in two locations and it is not possible to tell which one is desired._

```js
fibonacci.isValue(6765);
// Returns 20
```

```js
fibonacci.isValue(6770);
// Returns false
```

```js
fibonacci.isValue(1);
// Returns true
```

- ```value``` : (required) The integer that you would like to check if it is part of the Fibonacci sequence or not.