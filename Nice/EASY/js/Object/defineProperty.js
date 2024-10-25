// создає нове або замінює існуюче свойство
// Object.defineProperty(obj, prop, descriptor)
let obj = {};
Object.defineProperty(obj, 'key', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'static'
  });
  console.log(obj)