// Context lets the parent component make some information available 
// to any component in the tree below it—no matter how deep—without 
// passing it explicitly through props.

// 1 Create a context. (You can call it LevelContext, since it’s for the heading level.)
// 2 Use that context from the component that needs the data. (Heading will use LevelContext.)
// 3 Provide that context from the component that specifies the data. (Section will provide LevelContext.)

// The only argument to createContext is the default value
import { createContext } from 'react';
import { useContext } from 'react';

export const LevelContext = createContext(1);

///////////////////////////////////////////////////////////////////
export default function Heading({ children }) {
    const level = useContext(LevelContext);
    // ...
}










