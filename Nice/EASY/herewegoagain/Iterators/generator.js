// The value of the "yield" statement becomes the
// value returned by the next() call on the iterator.
let o = {
    x: 1, y: 2, z: 3,
    // A generator that yields each of the keys of thisobject
    g : function* () {
        for(let key of Object.keys(this)) {
            yield key;
            }
        }
    };
console.log(o.g().next())
// function* sequence(...iterables) {
//         for(let iterable of iterables) {
//             for(let item of iterable) {
//                 yield item;
//         }
//     }
// }

// // The yield* keyword is like yield except that, rather than
// // yielding a single value, it iterates an iterable object and yields each of
// // the resulting values
// function* sequence(...iterables) {
//     for(let iterable of iterables) {
//         yield* iterable;
//     }   
// }
// [...sequence("abc",oneDigitPrimes())]         



// function *oneAndDone() {
//     yield 1;
//     return "done";
// }
// // The return value does not appear in normal iteration.
// [...oneAndDone()] // => [1]
// // But it is available if you explicitly call next()
// let generator = oneAndDone();
// generator.next() // => { value: 1, done: false}
// generator.next() // => { value: "done", done: true}
// // If the generator is already done, the return value is notreturned again
// generator.next() // => { value: undefined, done:true }