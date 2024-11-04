
import './App.css'
import { useState } from "react";
import JobCard/* Jobcard can be changed to anything(just a name for the thing you are calling) */ from "./JobCard"
import personsData from './Data/personsData';

function Card(props) {
  return (
    <p className="card">
      Hello, {props.firstname} {props.lastname} : {props.message}
    </p>
  );
};

function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedin);
  };

  return (
    <div className="app">
      <h1>Welcome to Our App</h1>

      {isLoggedin ? (
        <div>
          <p>Hello, User! You are logged in.</p>
          <button onClick={handleLoginClick}>Log Out</button>
        </div>
      ) : (<button onClick={handleLoginClick}>Log in</button>

      )}
    </div>
  )
}


export default App
