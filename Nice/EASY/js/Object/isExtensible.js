// перевіряє чи обєкт можна розширювати 
const object1 = {};

Object.isExtensible(obj)
console.log(Object.isExtensible(object1));
// Expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// Expected output: false