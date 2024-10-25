function Football() {
    const shoot = () => {
    alert("Чудовий удар!");
    }
    
    return (
    <button onClick={shoot}>Зробіть удар!</button>
    );
}
//////////////////////////////////////////////////////////////
//передавання аргументів 
function Football() {
    const shoot = (a) => {
    alert(a);
    }
    
    return (
    <button onClick={() => shoot("Гол!")}>Зробіть удар!</button>
    );
}
//////////////////////////////////////////////////////////////
//об'єкт події
function Football() {
    const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' представляє подію React, яка ініціювала функцію, в даному випадку подія 'click'
    */
    }
    
    return (
    <button onClick={(event) => shoot("Гол!", event)}>Зробіть удар!</button>
    );
}