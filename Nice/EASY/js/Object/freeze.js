// заморозка обєкта
// Object.freeze(obj);
var obj = {
    prop: function() {},
    foo: 'bar'
  };
  
  // Можно добавлять новые свойства, существующие свойства можно изменять или удалять
  obj.foo = 'baz';
  obj.lumpy = 'woof';
  delete obj.prop;
  
  // Оба объекта эквивалентны, а также возвращаемый объект будет заморожен.
  // Необязательно сохранять возвращаемый объект при заморозке оригинала.
  var o = Object.freeze(obj);
  
  o === obj; // true
  Object.isFrozen(obj); // === true;
  
  // Теперь все изменения будут заканчиваться с ошибкой
  obj.foo = 'quux'; // тихо ничего не делает
  obj.quaxxor = 'the friendly duck'; // тихо не добавляет свойство
  
  // ...а в строгом режиме такие попытки вызовут выброс исключения TypeError
  function fail() {
    'use strict';
    obj.foo = 'sparky'; // выбросит TypeError
    delete obj.quaxxor; // выбросит TypeError
    obj.sparky = 'arf'; // выбросит TypeError
  }
  
  fail();