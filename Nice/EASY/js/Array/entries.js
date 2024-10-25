// вертає обєкт ітератор який має пари ключ значення 
var arr = ['a', 'b', 'c'];
var eArr = arr.entries();
// console.log(eArr.next().value); // [0, 'a']
// console.log(eArr.next().value); // [1, 'b']
// console.log(eArr.next().value); // [2, 'c']

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}