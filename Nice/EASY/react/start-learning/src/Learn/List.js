function Car(props) {
    return <li>Я є { props.brand }</li>;
}

    function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
    <>
        <h1>Хто живе в моєму гаражі?</h1>
        <ul>
        {cars.map((car) => <Car brand={car} />)}
        </ul>
    </>
    );
}
//////////////////////////////////////////////////////////////
// ключі
function Car(props) {
    return <li>Я є { props.brand }</li>;
}
    
function Garage() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];
    return (
    <>
        <h1>Хто живе в моєму гаражі?</h1>
        <ul>
            {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
    </>
    );
}