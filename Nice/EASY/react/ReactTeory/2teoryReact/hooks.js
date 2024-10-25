// In React, useState, as well as any other function starting with “use”, is called a Hook.
// Hooks are special functions that are only available while React is rendering (which we’ll 
// get into in more detail on the next page). They let you “hook into” different React features.

// HOOK №1 чо він зберігає дані між ренденгами і позволяє змінювати їх 
const [index, setIndex] = useState(0);
function handleClick() {
    setIndex(index + 1);
}