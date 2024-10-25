import './App.css';
import MyComponent from './components/MyComponent';
import { useEffect, useState} from 'react';


function App() {

  let [fromServer, setFromServer] = useState("");
  const fetchUserData = () => {
    fetch("http://localhost:3001/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFromServer(data);
      })
  }
  useEffect(() => {
     fetchUserData();
     console.log(fromServer)
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent something ={fromServer.vadim}/>
      </header>
    </div>
  );
}

export default App;
