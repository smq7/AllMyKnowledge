import { useState } from "react";
// Зверніть увагу, що ми деструктуруємо useState з react, оскільки це іменований експорт.
// Ми ініціалізуємо наш стан, викликаючи useState у нашому компоненті функції.
// useState приймає початковий стан і повертає два значення:
// Поточний стан
// Функція, яка оновлює стан

function FavoriteColor() {
    const [color, setColor] = useState("");
}
// Зверніть увагу, що знову ми деструктуруємо значення, які повертає useState.

// Перше значення, color, це наш поточний стан.

// Друге значення, setColor, це функція, яка використовується для оновлення нашого стану.
//////////////////////////////////////////////////////////////
function FavoriteColor() {
const [color, setColor] = useState("red");

return <h1>My favorite color is {color}!</h1>
}
//////////////////////////////////////////////////////////////
// Щоб оновити наш стан, ми використовуємо нашу функцію оновлення стану.
function FavoriteColor() {
    const [color, setColor] = useState("red");
    
    return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
    )
}
//////////////////////////////////////////////////////////////
// Що може мати стан?
// Хук useState можна використовувати для відстеження рядків, чисел, логічних значень, масивів, об’єктів і будь-якої їх комбінації!
// Ми могли б створити кілька хуків стану для відстеження окремих значень.

function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return (
    <>
    <h1>My {brand}</h1>
    <p>
        It is a {color} {model} from {year}.
    </p>
    </>
    )
}
//////////////////////////////////////////////////////////////
// Або ми можемо просто використати один стан і замість нього включити об’єкт!
function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    
    return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
    )
}
//////////////////////////////////////////////////////////////
// Оновлення об’єктів і масивів у стані
// Під час оновлення стану весь стан перезаписується.

// Що робити, якщо ми хочемо лише оновити колір нашого автомобіля?

// Якби ми викликали лише setCar({color: "blue"}), це видалило б марку, модель і рік випуску з нашого стану.

// Ми можемо використовувати оператор поширення JavaScript, щоб допомогти нам.
function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }
    
    return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
    )
}