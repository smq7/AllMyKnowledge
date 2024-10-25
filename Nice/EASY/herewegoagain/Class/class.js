// In JavaScript, a class is a set of objects that inherit properties from the
// same prototype object.

// A Range class using a constructor
function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
        
    includes: function(x) { return this.from <= x && x <= this.to; },
    
    [Symbol.iterator]: function*() {
    
        for(let x = Math.ceil(this.from); x <= this.to; x++)
    
        yield x;
    },

    toString: function() { return "(" + this.from + "..." + this.to + ")"; },
    constructor: Range
};
let r = new Range(1,3);

r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
// [...r]