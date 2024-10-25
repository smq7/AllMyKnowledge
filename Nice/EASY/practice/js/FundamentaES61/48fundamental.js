function vlas(obj) {
    return Object.getOwnPropertyNames(obj);
}

function Foo() {
    this.a = () => 1;
    this.b = () => 2;
  }
Foo.prototype.c = () => 3;
let obh = new Foo();
console.log(obh.c); 
console.log(vlas(new Foo()))

const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');

  console.log(functions(new Foo(), true));