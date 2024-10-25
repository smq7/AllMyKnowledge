// React — це повторне використання коду, 
// тому рекомендується розділяти 
// ваші компоненти на окремі файли.
// Зверніть увагу, що назва файлу має починатися з великої літери.
function Car() {
    return <h2>Hi, I am a Car!</h2>;
  }

export default Car;

// Щоб мати можливість використовувати компонент Car, 
// вам потрібно імпортувати файл у ваш додаток. index.hs
// import Car from './Car.js';