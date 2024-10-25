// When you want a component to “remember” some information, but you don’t 
// want that information to trigger new renders, you can use a ref.

// When a piece of information is used for rendering, keep it in state. When a
// piece of information is only needed by event handlers and changing it
// doesn’t require a re-render, using a ref may be more efficient.

import { useRef } from 'react';

export default function Counter() {
    // воно тіпа записує в реф обєкт {current:0} 
    let ref = useRef(0);
  
    function handleClick() {
      ref.current = ref.current + 1;
      alert('You clicked ' + ref.current + ' times!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me!
      </button>
    );
  }