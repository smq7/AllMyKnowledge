
// Хук useEffect дозволяє виконувати побічні ефекти у ваших компонентах.

// Декілька прикладів побічних ефектів: отримання даних, пряме оновлення DOM і таймери.

// useEffect приймає два аргументи. Другий аргумент необов’язковий.

// useEffect(<function>, <dependency>)
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        setCount((count) => count + 1);
        }, 1000);
    });

    return <h1>Я відобразив {count} разів!</h1>;
}
// Але зачекайте!! Він продовжує рахувати, хоча має рахуватися лише один раз!

// useEffect запускається на кожному рендері. Це означає, що коли кількість змінюється, відбувається візуалізація, яка потім запускає інший ефект.

// Це не те, чого ми хочемо. Існує кілька способів контролювати появу побічних ефектів.

// Ми завжди повинні включати другий параметр, який приймає масив. Додатково ми можемо передати залежності в useEffect у цьому масиві.
useEffect(() => {
    //Працює на кожному рендері
});
useEffect(() => {
    //Запускається лише на першому рендері
}, []);

useEffect(() => {
    //Запускається на першому рендері
    //І кожного разу, коли будь-яке значення залежності змінюється
}, [prop, state]);    
// Отже, щоб розв’язати цю проблему, запустіть цей ефект лише на початковому рендері.
function Timer() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    }, []); 
    
    return <h1>Я відтворив {count} разів!</h1>;
}
//////////////////////////////////////////////////////////////
// Ось приклад хука useEffect, який залежить від змінної. Якщо змінна count оновиться, ефект запуститься знову:
function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    
    useEffect(() => {
    setCalculation(() => count * 2);
    }, [count]); // <- додайте сюди змінну лічильника
    
    return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
    );
}
// Якщо є кілька залежностей, їх слід включити в масив залежностей useEffect.
//////////////////////////////////////////////////////////////
// Деякі ефекти потребують очищення, щоб зменшити витік пам’яті.

// Тайм-аути, підписки, прослуховувачі подій та інші ефекти, які більше не потрібні, мають бути усунені.

// Ми робимо це, додаючи функцію повернення в кінці хука useEffect.
function Timer() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);   
    
        return () => clearTimeout(timer)
    }, []);
    
    return <h1>Я відтворив {count} разів!</h1>;
}