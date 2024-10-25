// The useRef Hook returns an object with a single property called 
// current. Initially, myRef.current will be null. When React creates 
// a DOM node for this <div>, React will put a reference to this node 
// into myRef.current. You can then access this DOM node from your event
// handlers and use the built-in browser APIs defined on it.

import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
    {/* // вот туть inputRef.current стає цим input-ом  */}
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}