// вертає массив перечисляємих свойств обєкта [key, value]
// Object.entries(obj)

const object1 = {
    a: 'somestring',
    b: 42,
    vadim : function(vadim){
        return 0
    }
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  