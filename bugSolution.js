function foo(a, b) {
  if (a === null || b === null) {
    console.error("Null value encountered in foo function.  Check input parameters.");
    return 0; // Handle null values with an explicit error message
  }

  if (typeof a !== 'number' || typeof b !== 'number'){
    console.error("Non-numeric value encountered in foo function. Check input parameters");
    return NaN; // Handle non-numeric values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0 and error message
console.log(foo(5, null)); // Output: 0 and error message
console.log(foo(5, 5));   // Output: 10
console.log(foo("a", 5)); // Output: NaN and error message