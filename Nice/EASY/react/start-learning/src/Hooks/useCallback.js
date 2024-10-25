// ; Хук React useCallback повертає мемоізовану функцію зворотного виклику.

// ; Подумайте про запам’ятовування як про кешування значення, щоб його не потрібно було перераховувати.

// ; Проблема
// ; Однією з причин використання useCallback є запобігання повторному рендерингу компонента, якщо його атрибути не змінено.

// ; У цьому прикладі ви можете подумати, що компонент Todos не відобразиться повторно, якщо todos змінити:

const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
    );
};  
const App2 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    
    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };
    
    return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
    );
};
// //////////////////////////////////////////////////////////////
// Рішення
// Щоб виправити це, ми можемо використати хук useCallback, щоб запобігти повторному створенню функції без необхідності.

// Використовуйте хук useCallback, щоб запобігти непотрібному повторному рендерингу компонента Todos:
const Todos2 = ({ todos, addTodo }) => {
    console.log("child render");
    return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
    );
    };

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    
    const increment = () => {
    setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
    
    return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
    );
    };