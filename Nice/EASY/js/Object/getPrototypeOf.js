// вертає прототип заданого обєкта
// Object.getPrototypeOf(obj)

var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true