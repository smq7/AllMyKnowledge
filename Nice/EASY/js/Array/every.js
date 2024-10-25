// перевіряє чи всі елементи в масиві проходять провірку вертає булеан 


const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every((currentValue) => currentValue < 40));
// Expected output: true