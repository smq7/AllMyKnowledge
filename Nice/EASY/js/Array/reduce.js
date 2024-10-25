// виконує задану функцію до кожного елемента масива але кожне слідуюче
// виконання функціє виконується до попореднього результату 
// вертає едине значення для всьолго массиву 
// reduce(callbackFn, initialValue)

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   ((accumulator, currentValue) => accumulator + currentValue),
//   initialValue
// );

// console.log(sumWithInitial);
// // Expected output: 10

const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }
//  важно !!!!!!!!!!!!!!!!!!!!!!
array.reduce((accumulator, currentValue, index) => {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
});
array.reduce((accumulator, currentValue, index) => {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
},10);