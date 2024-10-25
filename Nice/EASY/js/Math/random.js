// рандомне число між 0 і 1 
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
console.log(getRandomArbitrary(10,99));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
console.log(getRandomInt(10,99));  