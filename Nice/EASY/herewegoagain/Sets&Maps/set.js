// A set is a collection of values, like an array is. Unlike arrays, however,
// sets are not ordered or indexed, and they do not allow duplicates:

// let s = new Set();

let t = new Set(s); // A new set that copies the elements of s.
let unique = new Set("Mississippi"); // 4 elements: "M", "i", "s", and "p"

// The size property of a set is like the length property of an array: it
// tells you how many values the set contains:
unique.size


let s = new Set(); // Start empty
s.size // => 0
s.add(1); // Add a number
s.size // => 1; now the set has one member
s.add(1); // Add the same number again
s.size // => 1; the size does not change
s.add(true); // Add another value; note that it is fine to mix types
s.size // => 2
s.add([1,2,3]); // Add an array value
s.size // => 3; the array was added, not its
elements
s.delete(1) // => true: successfully deleted element
1
s.size // => 2: the size is back down to 2
s.delete("test") // => false: "test" was not a member, deletion failed
s.delete(true) // => true: delete succeeded
s.delete([1,2,3]) // => false: the array in the set is
different
s.size // => 1: there is still that one array in the set
s.clear(); // Remove everything from the set
s.size // => 0
// check to see whether a specified
// value is a member of the set. We do this with the has() method
let oneDigitPrimes = new Set([2,3,5,7]);
oneDigitPrimes.has(2) // => true: 2 is a one-digit prime number
oneDigitPrimes.has(3) // => true: so is 3
oneDigitPrimes.has(4) // => false: 4 is not a prime
oneDigitPrimes.has("5")  // => false
// 
let product = 1;
oneDigitPrimes.forEach(n => { product *= n; });
product // => 210: 2 * 3 * 5 * 7