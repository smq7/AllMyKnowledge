// Event handler functions:

// Are usually defined inside your components.
// Have names that start with handle, followed by the name of the event.

export default function Button() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }

// Because event handlers are declared inside of a 
// component, they have access to the component’s props.  
  function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div>
        <AlertButton message="Playing!">
          Play Movie
        </AlertButton>
        <AlertButton message="Uploading!">
          Upload Image
        </AlertButton>
      </div>
    );
  }
//   Event propagation
// Event handlers will also catch events from any children your component might have. 
// We say that an event “bubbles” or “propagates” up the tree: it starts with where the
//  event happened, and then goes up the tree.
export default function Toolbar() {
    return (
      <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <button onClick={() => alert('Playing!')}>
          Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
          Upload Image
        </button>
      </div>
    );
  }
  
//   Stopping propagation
  function Button({ onClick, children }) {
    return (
      <button onClick={e => {
        // ТТУТ
        e.stopPropagation();
        onClick();
      }}>
        {children}
      </button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <Button onClick={() => alert('Playing!')}>
          Play Movie
        </Button>
        <Button onClick={() => alert('Uploading!')}>
          Upload Image
        </Button>
      </div>
    );
  }  

//   Preventing default behavior

export default function Signup() {
  return (
    <form onSubmit={e => {
      // тут
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}
