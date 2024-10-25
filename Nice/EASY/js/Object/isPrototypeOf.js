// перевіриє чи є один обєкт у лунцюжку прототипів іншого обєкта

// function Foo() {}
// function Bar() {}

// Bar.prototype = Object.create(Foo.prototype);

// const bar = new Bar();

// console.log(Foo.prototype.isPrototypeOf(bar));
// // Expected output: true
// console.log(Bar.prototype.isPrototypeOf(bar));
// // Expected output: true

class Foo {}
class Bar extends Foo {}
class Baz extends Bar {}

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// prototype chains:
// foo: Foo --> Object
// bar: Bar --> Foo --> Object
// baz: Baz --> Bar --> Foo --> Object
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Baz.prototype.isPrototypeOf(bar)); // false
console.log(Baz.prototype.isPrototypeOf(foo)); // false
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(foo)); // false
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(bar)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true