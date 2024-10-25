function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}
const myElement = <Car brand="Ford" />;

//////////////////////////////////////////////////////////////
function Car(props) {
    return <h2>Я є { props.brand }!</h2>;
}
    
function Garage() {
    return (
    <>
        <h1>Хто живе в моєму гаражі?</h1>
        <Car brand="Ford" />
    </>
    );
}
//////////////////////////////////////////////////////////////
// Якщо у вас є змінна для надсилання, а не рядок, як у прикладі вище, 
// ви просто помістіть назву змінної у фігурні дужки:
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
    const carName = "Ford";
    return (
    <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carName } />
    </>
    );
}
//////////////////////////////////////////////////////////////
// Або якби це був об’єкт:
function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
}
    
function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
    <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
    </>
    );
}
