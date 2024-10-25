const array1 = ['a', 'b', 'c'];
let  array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
array2[2] = "g";
console.log(array3);
console.log(array2);