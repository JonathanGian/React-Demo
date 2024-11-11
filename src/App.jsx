
import './App.css'
import { useState } from "react";
import JobCard/* Jobcard can be changed to anything(just a name for the thing you are calling) */ from "./components/JobCard"
import personsData from './Data/personsData';

/* function Card(props) {
  return (
    <p className="card">
      Hello, {props.firstname} {props.lastname} : {props.message}
    </p>
  );
}; */

function App() {

  const [isLoggedin, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div className="app">
      <h1>Welcome to Our App</h1>

      {isLoggedin ? (
        <div id='JobCardDiv'>
          <p>The list</p>
          {personsData.map((person) =>
        <JobCard
          key = {person.id}
          name = {person.firstName}
          title = {person.title}
          age = {person.age}
          animal = {person.animal}
        />)}
          <button onClick={toggleLogin}>Log Out</button>
        </div>
        
      ) : (<button onClick={toggleLogin}>Log in</button>

      )}
    </div>
  )
}


export default App
