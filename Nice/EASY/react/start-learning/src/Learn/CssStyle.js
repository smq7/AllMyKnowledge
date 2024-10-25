const Header = () => {
    return (
    <>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
    );
}
//////////////////////////////////////////////////////////////
// Ви також можете створити об’єкт із інформацією про стиль і посилатися на нього в атрибуті style:
const Header2 = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
    );
}