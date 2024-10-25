var numObj = 5.123456;

console.log(numObj.toPrecision());    // выведет '5.123456'
console.log(numObj.toPrecision(5));   // выведет '5.1235'
console.log(numObj.toPrecision(2));   // выведет '5.1'
console.log(numObj.toPrecision(1));   // выведет '5'

numObj = 0.000123;

console.log(numObj.toPrecision());    // выведет '0.000123'