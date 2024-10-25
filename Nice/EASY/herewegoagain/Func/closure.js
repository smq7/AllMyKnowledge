// let scope = "global scope"; // A global variable
// function checkscope() {
// let scope = "local scope"; // A local variable
// function f() { return scope; } // Return the value in
// return f();
// }
// checkscope()
// ///////////////////////////////////////////////////////////////////////////// 
// let uniqueInteger = (function() { // Define and invoke
//         let counter = 0; // Private state of function below
//         return function() { return counter++; };
//     }());
//     console.log(uniqueInteger())
//     console.log(uniqueInteger)
//     console.log(uniqueInteger())
// uniqueInteger() // => 0
// uniqueInteger()

// /////////////////////////////////////////////////////////////////////////////
// function counter() {
//         let n = 0;
//         return {
//             count: function() { return n++; },
//             reset: function() { n = 0; }
//         };
//     }
// let c = counter(), d = counter(); // Create two counters
// c.count() // => 0
// d.count() // => 0: they count independently
// c.reset(); // reset() and count()methods share state
// c.count() // => 0: because we reset c
// d.count()
// console.log(d.count())
// console.log(c.count())

/////////////////////////////////////////////////////////////////////////////
// This function adds property accessor methods for a property with
// the specified name to the object o. The methods are named get<name>
// and set<name>. If a predicate function is supplied, the setter
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.
//
// The unusual thing about this function is that the property value
// that is manipulated by the getter and setter methods is not stored in
// the object o. Instead, the value is stored only in a local variable
// in this function. The getter and setter methods are also defined
// locally to this function and therefore have access to this local variable.
// This means that the value is private to the two accessor methods, and it
// cannot be set or modified except through the setter method.

function addPrivateProperty(o, name, predicate) {
    let value;  // This is the property value

    // The getter method simply returns the value.
    o[`get${name}`] = function() { return value; };

    // The setter method stores the value or throws an exception if
    // the predicate rejects the value.
    o[`set${name}`] = function(v) {
        if (predicate && !predicate(v)) {
            throw new TypeError(`set${name}: invalid value ${v}`);
        } else {
            value = v;
        }
    };
}

// The following code demonstrates the addPrivateProperty() method.
let o = {};  // Here is an empty object

// Add property accessor methods getName and setName()
// Ensure that only string values are allowed
addPrivateProperty(o, "Name", x => typeof x === "string");
addPrivateProperty(o, "Number", x => typeof x === "number");
o.setName("Frank");       // Set the property value
o.getName()               // => "Frank"
o.setNumber(1);             // !TypeError: try to set a value of the wrong type
console.log(o.getNumber())

/////////////////////////////////////////////////////////////////////////////
function constfunc(v) { return () => v; }
// Create an array of constant functions:
let funcs = [];
for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);
// The function at array element 5 returns the value 5.
funcs[5]()
console.log(constfunc.prototype)
