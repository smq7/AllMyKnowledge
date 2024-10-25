// { set prop(val) { /* … */ } }
// { set [expression](val) { /* … */ } }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const language = {
    set current(name) {
      this.log.push(name);
    },
    log: [],
  };
  
  language.current = "EN";
  console.log(language.log); // ['EN']
  
  language.current = "FA";
  console.log(language.log); // ['EN', 'FA']
// console.log(language.current);
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
  delete language.current; // If you want to remove the setter, you can just delete it:
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const o = { a: 0 };

Object.defineProperty(o, "b", {
  set(x) {
    this.a = x / 2;
  },
});

o.b = 10;
// Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.a); // 5

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const expr = "foo";

const obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"

obj.foo = "baz";
// Run the setter

console.log(obj.baz); // "baz"