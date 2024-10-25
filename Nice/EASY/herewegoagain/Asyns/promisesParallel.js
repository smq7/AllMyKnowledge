// Promise.all() takes an array of Promise objects as its input and
// returns a Promise.
// The returned Promise will be rejected if any of the
// input Promises are rejected. Otherwise, it will be fulfilled with an array
// of the fulfillment values of each of the input Promises.

const urls = [ /* zero or more URLs here */ ];
let promises = urls.map(url => fetch(url).then(r => r.text()));
Promise.all(promises)
.then(bodies => { /* do something with the array of
strings */ })
.catch(e => console.error(e))

// Occasionally, you may want to run a number of Promises at once but
// may only care about the value of the first one to fulfill. In that case,
// you can use Promise.race() instead of Promise.all(). It
// returns a Promise that is fulfilled or rejected when the first of the
// Promises in the input array is fulfilled or rejected