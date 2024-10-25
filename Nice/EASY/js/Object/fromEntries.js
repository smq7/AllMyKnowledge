// з пар ключ значення в обєкт
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj = Object.fromEntries(entries);
  
  console.log(obj);
  // Expected output: Object { foo: "bar", baz: 42 }
  
  const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj2 = Object.fromEntries(arr);
console.log(obj2); // { 0: "a", 1: "b", 2: "c" }