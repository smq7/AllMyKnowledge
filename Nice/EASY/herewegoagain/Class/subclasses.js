// In object-oriented programming, a class B can extend or subclass
// another class A. We say that A is the superclass and B is the subclass.
// Instances of B inherit the methods of A. The class B can define its own
// methods, some of which may override methods of the same name
// defined by class A
// This is the constructor function for our subclass
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

function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}

// Ensure that the Span prototype inherits from the Range prototype
Span.prototype = Object.create(Range.prototype);

// We don't want to inherit Range.prototype.constructor, so we
// define our own constructor property.
Span.prototype.constructor = Span;

// By defining its own toString() method, Span overrides the
// toString() method that it would otherwise inherit from Range.
Span.prototype.toString = function() {
    return `(${this.from}... +${this.to - this.from})`;
};