function MissedGoal() {
    return <h1>MISSED!</h1>;
}
    
function MadeGoal() {
    return <h1>Goal!</h1>;
}
//////////////////////////////////////////////////////////////
function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal/>;
    }
    return <MissedGoal/>;
}
//////////////////////////////////////////////////////////////
// Логічний оператор &&
// Якщо cars.length > 0 дорівнює true, вираз після && буде відображено.
function Garage(props) {
    const cars = props.cars;
    return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          У вашому гаражі є {cars.length} автомобілів.
        </h2>
      }
    </>
    );
}
    
const cars = ['Ford', 'BMW', 'Audi'];
//////////////////////////////////////////////////////////////
function Goal(props) {
    const isGoal = props.isGoal;
    return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
    );
}
    
