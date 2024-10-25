let F = function() {}; // This is a function object.
let p = F.prototype; // This is the prototype object associated with F.
let c = p.constructor; // This is the function associated with the prototype.
c === F // => true: F.prototype.constructor === F for any F
console.log(p.constructor)
console.log(p)
console.log(F.prototype)
console.log(c)
let o = new F(); // Create an object o of class F
o.constructor === F;
// function Range(a,b)
// {
//   this.a = a;
//   this.b = b; 
// }

// let g = Range.prototype;
// console.log(g);
// console.log(g.constructor)