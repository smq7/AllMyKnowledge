// створює нове або замінює існуюче свйоство обєкта
// Object.defineProperties(obj, props)
let obj = {}
console.log(Object.defineProperties(obj, {
    'property1': {
      value: true,
      writable: true
    },
    'property2': {
      value: 'Hello',
      writable: false
    }
    // и т.д.
  }));