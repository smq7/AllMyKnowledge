function promisesChaining() {
    let chainingResult = firstPromise()
    .then(x => secondPromise())
    .then(x => "Promises chained");
    return chainingResult;
  }
console.log(promisesChaining().then());
  
  function firstPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promises'), 50);
    });
  }
  function secondPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('chained'), 40);
    });
  }