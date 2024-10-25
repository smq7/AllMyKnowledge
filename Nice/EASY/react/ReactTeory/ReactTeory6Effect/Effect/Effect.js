// Effects let you run some code after rendering so that you can 
// synchronize your component with some system outside of React.

// Effects let you specify side effects that are caused by rendering itself, 
// rather than by a particular event. 

import { useEffect } from 'react';
function MyComponent() {
    useEffect(() => {
      // Code here will run after *every* render
    });
    return <div />;
  }

  //Every time your component renders, React will update the screen 
//and then run the code inside useEffect. In other words,useEffect “delays” a
//piece of code from running until that render is reflected on the screen. 

////////////////////////////////////////////////////////////////////////////

// By default, Effects run after every render. Often, this is not what you want:
// Sometimes, it’s slow. Synchronizing with an external system is not always 
// instant, so you might want to skip doing it unless it’s necessary. 
// For example, you don’t want to reconnect to the chat server on every 
// keystroke.

// You can tell React to skip unnecessarily re-running the Effect by 
// specifying an array of dependencies as the second argument to the
// useEffect call. Start by adding an empty [] array 

useEffect(() => {
    
}, /*массив залженостей*/[]);

//The dependency array can contain multiple dependencies. React will only skip 
//re-running the Effect if all of the dependencies you
//specify have exactly the same values as they had during the previous render.

useEffect(() => {
    // This runs after every render
  });
  
  useEffect(() => {
    // This runs only on mount (when the component appears)
  }, []);
  
  useEffect(() => {
    // This runs on mount *and also* if either a or b have changed since the last render
  }, [a, b]);

////////////////////////////////////////////////////////////////////////////

