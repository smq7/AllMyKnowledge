// React Context — це спосіб глобального керування станом.

// Його можна використовувати разом із хуком useState для легшого обміну станом між глибоко вкладеними компонентами, ніж за допомогою useState окрем
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
    const [user, setUser] = useState("Jesse Hall");
    
    return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
    );
}
    
function Component2({ user }) {
    return (
    <>
        <h1>Component 2</h1>
        <Component3 user={user} />
    </>
    );
}
    
function Component3({ user }) {
    return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
    );
}
    
function Component4({ user }) {
    return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
    );
}
    
function Component5({ user }) {
    return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
    );
}

//////////////////////////////////////////////////////////////
// Рішення — створити контекст.

// Створити контекст
// Щоб створити контекст, потрібно імпортувати createContext та ініціалізувати його:
import { useState, createContext, useContext } from "react";

// const UserContext = createContext()

function Component1() {
    const [user, setUser] = useState("Jesse Hall");
    
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
        </UserContext.Provider>
    );
}
//////////////////////////////////////////////////////////////
// Повний прикладconst UserContext = createContext();
const UserContext = createContext()

function Component1() {
    const [user, setUser] = useState("Jesse Hall");
    
    return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
    );
}
    
function Component2() {
    return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
    );
}
    
function Component3() {
    return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
    );
}
    
function Component4() {
    return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
    );
}
    
function Component5() {
    const user = useContext(UserContext);
    
    return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
    );
}