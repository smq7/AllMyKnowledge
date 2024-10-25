function App() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    
    useEffect(() => {
    count.current = count.current + 1;
    });
    
    return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
    );
}
//////////////////////////////////////////////////////////////
function App() {
    const inputElement = useRef();
    
    const focusInput = () => {
    inputElement.current.focus();
    };
    
    return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
    );
}
//////////////////////////////////////////////////////////////
function App() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    
    useEffect(() => {
    previousInputValue.current = inputValue;
    }, [inputValue]);
    
    return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Поточне значення: {inputValue}</h2>
      <h2>Попереднє значення: {previousInputValue.current}</h2>
    </>
    );
    }