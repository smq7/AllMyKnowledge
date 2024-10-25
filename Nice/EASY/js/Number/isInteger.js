Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true
console.log(Number.isInteger(Infinity))
Number.isInteger(0.1);       // false