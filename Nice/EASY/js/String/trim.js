// Є ще трім старт і трім енд
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// Другой пример, в котором .trim() убирает пробельные символы только с одной стороны.

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'