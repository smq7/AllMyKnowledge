// Компонент класу (Class)
class Car extends React.Component {
    render() {
    return <h2>Hi, I am a Car!</h2>;
    }
}
//////////////////////////////////////////////////////////////
// Компонент функції (Function)
function Car() {
    return <h2>Hi, I am a Car!</h2>;
}
// Відобразити компонент Car у "root" (кореневому) елементі:

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />); має бути в index.js 
//////////////////////////////////////////////////////////////
// компонент з реквізитаим
function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
}
    
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red"/>);
//////////////////////////////////////////////////////////////
// компонент в компоненті 
function Car() {
    return <h2>I am a Car!</h2>;
}
   
function Garage() {
    return (
        <>
        <h1>Who lives in my Garage?</h1>
        <Car />
        </>
    );
}
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<Garage />);
//////////////////////////////////////////////////////////////
   