let s = new Map(); // Create a new, empty map
let n = new Map([ // A new map initialized with string keys mapped to numbers
["one", 1],
["two", 2]
]);
let copy = new Map(n); // A new map with the same keys and values as map n
let o = { x: 1, y: 2}; // An object with two properties
let p = new Map(Object.entries(o)); // Same as new map([["x",1], ["y", 2]])

console.log(Object.entries(o))
let m = new Map(); // Start with an empty map
m.size // => 0: empty maps have no keys
m.set("one", 1); // Map the key "one" to the value 1
m.set("two", 2); // And the key "two" to the value 2.
m.size // => 2: the map now has two keys
m.get("two") // => 2: return the value associatedwith key "two"
m.get("three") // => undefined: this key is not in the
set
m.set("one", true); // Change the value associated with anexisting key
m.size // => 2: the size doesn't change
m.has("one") // => true: the map has a key "one"
m.has(true) // => false: the map does not have a key
true
m.delete("one") // => true: the key existed and deletionsucceeded
m.size // => 1
m.delete("three") // => false: failed to delete anonexistent key
m.clear(); // Remove all keys and values from themap

let m2 = new Map([["x", 1], ["y", 2]]);
[...m] // => [["x", 1], ["y", 2]]
for(let [key, value] of m) {
// On the first iteration, key will be "x" and value willbe 1
// On the second iteration, key will be "y" and valuewill be 2
}
// [...m.keys()] // => ["x", "y"]: just the keys
// [...m.values()] // => [1, 2]: just the values
// [...m.entries()] // => [["x", 1], ["y", 2]]: same as [...m]
m.forEach((value, key) => { // note value, key NOT key,
    value
    // On the first invocation, value will be 1 and key willbe "x"
    // On the second invocation, value will be 2 and key willbe "y"
    });
