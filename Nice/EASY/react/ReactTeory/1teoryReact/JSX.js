// JSX must Return a single root element 
// If you don’t want to add an extra <div> to your markup, you can write <> and </> instead:
// JSX looks like HTML, but under the hood it is transformed into plain 
// JavaScript objects. You can’t return two objects from a function without wrapping 
// them into an array. This explains why you also can’t return two JSX tags without 
// wrapping them into another tag or a Fragment.
export default function TodoList() {
    return (
      <>
        <h1>Hedy Lamarr's Todos</h1>
        <img 
          src="https://i.imgur.com/yXOvdOSs.jpg" 
          alt="Hedy Lamarr" 
          className="photo" 
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
      </>
    );
}
// if you want to dynamically specify the src or alt text? You 
// could use a value from JavaScript by replacing " and " with { and }:
// any JavaScript expression will work between curly braces
// herefore, to pass a JS object in JSX, you must wrap the object in another pair of curly
//  braces: person={{ name: "Hedy Lamarr", inventions: 5 }}.
export default function Avatar() {
    let a = <h1>To Do List for {formatDate(today)}</h1>

    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';

    return (
        <>
        {a}
            <ul style={{
                backgroundColor: 'black',
                color: 'pink'
                }}>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
            <img
            className="avatar"
            src={avatar}
            alt={description}
            />
        </>
    );
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat(
      'en-US',
      { weekday: 'long' }
    ).format(date);
  }
