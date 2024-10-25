// However, if you try to put a ref on your own component, like <MyInput />, 
// by default you will get null. Here is an example demonstrating it. Notice
// how clicking the button does not focus the input:

//це не працює
import { useRef } from 'react';

function MyInput(props) {
  return <input {...props} />;
}

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

//////////
import { forwardRef, useRef } from 'react';

// Instead, components that want to expose their DOM nodes 
// have to opt in to that behavior. A component can specify 
// that it “forwards” its ref to one of its children. Here’s 
// how MyInput can use the forwardRef API:

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
