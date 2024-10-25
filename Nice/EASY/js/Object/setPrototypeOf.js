// змінює прототи оюєкта на заданий прототип 
// Object.setPrototypeOf(obj, prototype)
const obj = {};
const parent = { foo: 'bar' };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"


function Human(name, level) {
    this.name = name;
    this.level = level;
  }
  
  function SuperHero(name, level) {
    Human.call(this, name, level);
  }
  
  Object.setPrototypeOf(SuperHero.prototype, Human.prototype);
  
  // Set the `[[Prototype]]` of `SuperHero.prototype`
  // to `Human.prototype`
  // To set the prototypal inheritance chain
  
  Human.prototype.speak = function () {
    return `${this.name} says hello.`;
  };
  
  SuperHero.prototype.fly = function () {
    return `${this.name} is flying.`;
  };
  
  const superMan = new SuperHero("Clark Kent", 1);
  
  console.log(superMan.fly());
  console.log(superMan.speak());