// перевіряє чи хоть один елемент проходить перевірку функції
// вертаэ булеан
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even

console.log(array.some((element) => element % 2 === 0));
// Expected output: true
