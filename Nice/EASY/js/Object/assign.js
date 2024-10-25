// копіювання перечисляємий свойст з оодного або багатьох обєктів в таргетний обєкт 
// вертає таргетний обєкт
// Object.assign(target, ...sources)

// var o1 = { a: 1 };
// var o2 = { b: 2 };
// var o3 = { c: 3 };

// var obj = Object.assign(o1, o2, o3);


var v1 = '123';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo')

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Примитивы будут обёрнуты, а null и undefined - проигнорированы.
// Обратите внимание, что собственные перечисляемые свойства имеет только обёртка над строкой.
console.log(obj); // { "0": "1", "1": "2", "2": "3" }