// A higher-order function is a function that operates on functions, taking
// one or more functions as arguments and returning a new function. Here
// // is an example:
// function not(f) {
//     return function(...args) { // Return a newfunction
//     let result = f.apply(this, args); // that calls f
//     console.log(result)
//     return !result; // and negates itsresult.
//     };
//     }
//     const even = x => x % 2 === 0; // A function to determine ifa number is even
//     const odd = not(even); // A new function that doesthe opposite
//    [1,1,3,5,5].every(odd) // => true: every element ofthe array is odd
/////////////////////////////////////////////////////////////////////////////
   function compose(f, g) {
    return function(...args) {
    // We use call for f because we're passing a singlevalue and
    // apply for g because we're passing an array of    values.
      return f.call(this, g.apply(this,args));
    };
    }
    const sum = (x,y) => x+y;
    const square = x => x*x;
    console.log(compose(square, sum)(2,3)) 