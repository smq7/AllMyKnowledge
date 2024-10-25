// The apply() method of Function instances calls
//  this function with a given this value, and arguments provided as 
// an array (or an array-like object).

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
