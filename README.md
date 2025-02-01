# JavaScript Bug: Handling Null and Undefined Inputs

This repository demonstrates a common JavaScript bug related to handling null or undefined inputs and provides a solution.

## Bug Description
The `foo` function attempts to access the `length` property of an input `x`.  If `x` is null or undefined, or if it's not an object with a `length` property, this will result in a `TypeError: Cannot read properties of null (reading 'length')` error.

## Solution
The solution involves adding a check to ensure that `x` is an object and has a `length` property before attempting to access it.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` in your preferred JavaScript environment.
3. Call the `foo` function with various inputs, including `null`, `undefined`, an empty array, a string, a number, and an object with a `length` property.
4. Observe the error when incorrect inputs are used.
5. Compare this behavior with `bugSolution.js` to see the fix.
