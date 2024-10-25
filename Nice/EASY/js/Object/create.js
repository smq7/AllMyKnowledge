// створює новий обєкт  з заданим прототіпом і свойствари 
// Object.create(proto[, propertiesObject])

// Shape — суперкласс
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // метод суперкласса
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Фигура переместилась.');
  };
  
  // Rectangle — подкласс
  function Rectangle() {
    Shape.call(this); // вызываем конструктор суперкласса
  }
  
  // подкласс расширяет суперкласс
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();
  
  console.log('Является ли rect экземпляром Rectangle? ' + (rect instanceof Rectangle)); // true
  console.log('Является ли rect экземпляром Shape? ' + (rect instanceof Shape)); // true
  console.dir(Rectangle.prototype);
  rect.move(1, 1); // выведет 'Фигура переместилась.'