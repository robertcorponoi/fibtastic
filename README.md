<p align="center">
  <img width="250" height="250" src="./fibtastic.png">
</p>

<h1 align="center">Fibtastic</h1>

<p align="center">Simple and easy to use tools to work with the Fibonacci sequence.<p>

<div align="center">
	<a href="https://www.npmjs.com/package/fibtastic" target="__blank">
		<img src="https://img.shields.io/npm/v/fibtastic.svg?style=flat-square">
	</a>
	<img src="https://img.shields.io/david/robertcorponoi/fibtastic.svg?style=flat-square">
	<a href="https://gitter.im/robertcorponoi/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link" target="__blank">
		<img src="https://img.shields.io/gitter/room/robertcorponoi/fibtastic.svg?style=flat-square">
	</a>
</div>

## **Installation**

To install this module through npm, simply use the following command:

```
$ npm install --save fibtastic
```

and then require it in your project like so:

```js
const fibtastic = require('fibtastic');
```

or if you use ES6 modules in the browser, you can import it:

```js
import * as fibonacci from './node_modules/fibtastic/fibtastic.js';
```

## **Basic Example**

Using fibtastic is short and simple. Calculating the fibonacci sequence from the 10th to the 15th number is shown below:

```js
const fibonacci = require("fibtastic");

const sequence = fibonacci.sequence(10, 15);

console.log(sequence);
// => [55, 89, 144, 233, 377, 610]
```

## **API**

There are currently three methods that make up fibtastic with the above sequence included.

### **sequence**

Sequence takes an object with an optional start time and a required end time and returns the fibonacci sequence from the specified start point to the end point with the start and end points included.

| Type   | Option | Description | Default |
| ------ | ------ | ----------- | ------- |
| number | start  | Location in the fibonacci sequence to start | 0
| number | end    | Location in the fibonacci sequence to stop  | none (required)

Example:

```js
const sequence = fibonacci.sequence(10, 15);

console.log(sequence);
// => [55, 89, 144, 233, 377, 610]
// => [55, 89, 144, 233, 377, 610]
```

---

### **value**

Value is used to find the fibonacci number at a specific point in the sequence.

| Type   | Option    | Description | Default |
| ------ | --------- | ----------- | ------- |
| number | location  | The location in the fibonacci sequence to retrieve the value from | none (required)

Example:

```js
const value = fibonacci.value(20);

console.log(value); 
// => 6765
```

---

### **isValue**

IsValue takes a value and check to see if that value is a part of the fibonacci sequence. If it is, it returns the location in the sequence where the value is and if it is not part of the fibonacci sequence it returns false.

_**Note:**_ If the value is less than 2 but greater than 0, `isValue` will just return true because the value 1 occurs in two locations in the fibonacci sequence and it is not possible to deduce which location is desired.

| Type   | Option | Description | Default |
| ------ | ------ | ----------- | ------- |
| number | value  | The value to use to search the fibonacci sequence and find the location | none (required)

Examples:

```js
const isValue = fibonacci.isValue(6765);

console.log(isValue); 
// => 20
```

```js
const isValue = fibonacci.isValue(6770);

console.log(isvalue); 
// => false
```

```js
const isValue = fibonacci.isValue(1);

console.log(isValue); 
// => true
```

## **Running Tests**

To run the tests, use:

```
npm run test
```

## **License**

MIT