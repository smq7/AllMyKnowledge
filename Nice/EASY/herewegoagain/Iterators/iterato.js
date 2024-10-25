// An iterable object is any object with a special iterator method that returns an iterator object. 

// An iterator is any object with a next() method that returns an iteration result objec

// And an iteration result object is an object with properties named value and done.

let iterable = [99];
let iterator = iterable[Symbol.iterator]();
console.log(iterator)
for(let result = iterator.next(); !result.done; result =
iterator.next()) {
console.log(result.value) // result.value == 99
}