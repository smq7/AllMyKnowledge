import React from 'react';
import ReactDOM from 'react-dom/client';
// import './Learn/Anything.css'
// import Car from './Learn/Car';
// import Vad from './ExportCar';
// const myFirstElement = <h1>Hello React!</h1>
import { useState, useEffect, createContext, useContext, useRef, useReducer,memo, useCallback  } from "react";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setInputs(values => { 
        console.log(values)
        console.log(inputs)
        return ({...values, [name]: value})})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);