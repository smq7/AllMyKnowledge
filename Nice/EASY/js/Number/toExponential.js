var numObj = 77.1234;


console.log(numObj.toExponential());  // выведет 7.71234e+1
console.log(numObj.toExponential(4)); // выведет 7.7123e+1
console.log(numObj.toExponential(2)); // выведет 7.71e+1
console.log(77.1234.toExponential()); // выведет 7.71234e+1
console.log(77 .toExponential());     // выведет 7.7e+1