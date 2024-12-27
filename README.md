# Incorrect Null Check in JavaScript Function

This repository demonstrates a common error in JavaScript: incorrectly handling null and undefined values.  The `foo` function demonstrates this issue. The solution shows how to properly handle null and undefined values to prevent unexpected behavior.

## Bug

The `foo` function in `bug.js` incorrectly handles `null` values. If either `a` or `b` is `null`, the function simply returns without executing the rest of its logic. This might be unexpected if the function is designed to handle null or undefined inputs in a different way. For example, it may need to return a default value, throw an error, or perform some alternative calculation. 

## Solution

The corrected function in `bugSolution.js` addresses this by using a more robust check for nullish values using the nullish coalescing operator (`??`) or explicit checks for both `null` and `undefined`. 