const { getDogs, getCats, getBirds, firstPromise, secondPromise } = require('../utils/utilPromises');

/**
 * Task-1: Create a promise with the resolve state
 * Implement a promise what will be resolved with "Resolved!" string
 * @returns {Promise<"Resolved!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */

function promiseResolve() {
  return Promise.resolve("Resolved!");
}

/**
 * Task-2: Create a promise with the reject state
 * Implement a promise what will be rejected with "Rejected!" string
 * @returns {Promise<"Rejected!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 */

function promiseReject() {
  return Promise.reject("Rejected!");
}

/**
 * Task-3: Create a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 * hint: use new Promise()
 */

function fullPromise(param) {
  return new Promise((resolve,reject) =>{
    if(param){
      resolve("Resolved!");
    } else {
      reject("Rejected!");
    }
  })
}

/**
 * Task-4: Chain two promises (firstPromise() and secondPromise() from the './utils/utilPromises' file)
 * and store the result to the variable 'chainingResult' = 'Promises chained';
 * Please do the chaining inside of the promisesChaining function (please do NOT use async/await)
 */

function promisesChaining() {
  let chainingResult = firstPromise()
  .then(x => secondPromise())
  .then(x => "Promises chained");
  return chainingResult;
}

/**
 * Task-5:
 * 1. Implement a function getAnimals() that will return the result of 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file;
 * 2. Please use .then() operator
 * 3. Convert ['dogs', 'cats', 'birds'] -> ['DOGS', 'CATS', 'BIRDS']
 * getAnimals() -> ['DOGS', 'CATS', 'BIRDS']
 * @returns {Promise<"['DOGS', 'CATS', 'BIRDS']">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * do NOT use async/await syntax here
 */

function getAnimals() {
  return Promise.all([getDogs(), getCats(), getBirds()]).then(arr => {
    return arr.map(v => v.toUpperCase())
  })
}

module.exports = {
  promiseResolve,
  promiseReject,
  fullPromise,
  getAnimals,
  promisesChaining,
};
