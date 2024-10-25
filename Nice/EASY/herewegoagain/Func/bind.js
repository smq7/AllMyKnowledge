// The bind() method of Function instances creates a new 
// function that, when called, calls this function with its this
//  keyword set to the provided value, and a given sequence of 
//  arguments preceding any provided when the new function is called.
const vad = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  
  const unboundGetX = vad.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(vad);
  console.log(boundGetX)
  console.log(boundGetX());
  // Expected output: 42
  