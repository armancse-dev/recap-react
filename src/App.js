import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent brand="Apple" price="5000"></MyComponent>
      <MyComponent brand="Microsoft" price="10000"></MyComponent>
      <MyComponent brand="Google" price="00"></MyComponent>
      
    </div>
  );
}

function MyComponent(props){
  console.log(props);
  return(
    <div className='myStyle'>
      <h1>Yo yo mama ! {props.brand}</h1>
      <h4>Asking Money: {props.price}</h4>
      <p>i can write my own component</p>
    </div>
  )
}
export default App;
