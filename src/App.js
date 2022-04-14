import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand="Apple" price="5000"></MyComponent>
      <MyComponent brand="Microsoft" price="10000"></MyComponent>
      <MyComponent brand="Google" price="00"></MyComponent>


      
    </div>
  );
}

function LoadUsers(){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))


  }, [])
  return(
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <p>Call me baby: {props.phone}</p>
    </div>
  )
}

function MyComponent(props){
  const [points, setPoints] = useState(1);
  const handlePoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return(
    <div className='myStyle'>
      <h1>Yo yo mama ! {props.brand}</h1>
      <h4>Asking Money: {props.price}, I have points: {points}</h4>
      <button onClick={handlePoints}>Add Points</button>
      <p>i can write my own component</p>
    </div>
  )
}
export default App;
