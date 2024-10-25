// 1Create the context.
// 2Put state and dispatch into context.
// 3Use context anywhere in the tree.



// in one file Context and reducer
//App.js 
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
//TasksContext.js тут контекст і редусер разом
import { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// export function useTasks() {
//   return useContext(TasksContext);
// }

// export function useTasksDispatch() {
//   return useContext(TasksDispatchContext);
// }

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];


// можна ше скоротити 
export function useTasks() {
    return useContext(TasksContext);
}
  
export function useTasksDispatch() {
return useContext(TasksDispatchContext);
}
//  і замість 
const dispatch = useContext(TasksDispatchContext);
const tasks = useContext(TasksContext);
// писати
const tasks2 = useTasks();
const dispatch2 = useTasksDispatch();
