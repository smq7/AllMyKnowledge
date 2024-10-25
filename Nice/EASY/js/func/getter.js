// { get prop() { /* … */ } }
// { get [expression]() { /* … */ } }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const obj = {
    log: ["example", "test"],
    get latest() {
      if (this.log.length === 0) return undefined;
      return this.log[this.log.length - 1];
    },
  };
  console.log(obj.latest); // "test"

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  class ClassWithGetSet {
    #msg = "hello world";
    get msg() {
      return this.#msg;
    }
    set msg(x) {
      this.#msg = `hello ${x}`;
    }
  }
  
  const instance = new ClassWithGetSet();
  console.log(instance.msg); // "hello world"
  
  instance.msg = "cake";
  console.log(instance.msg); // "hello cake"
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  delete obj.latest; // delete getter

  const o = { a: 0 };
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// add getter in obj 
Object.defineProperty(o, "b", {
  get() {
    return this.a + 1;
  },
});

console.log(o.b);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const expr = "foo";

const obj2 = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj2.foo); // "bar"
obj2.foo = 10;
console.log(obj2.foo)
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// static getter
class MyConstants {
    static get foo() {
      return "foo";
    }
  }
  
  console.log(MyConstants.foo); // 'foo'
  MyConstants.foo = "bar";
  console.log(MyConstants.foo); // 'foo', a static getter's value cannot be changed