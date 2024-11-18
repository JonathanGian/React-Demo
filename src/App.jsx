
import './App.css'
import { useState } from "react";
import JobCard/* Jobcard can be changed to anything(just a name for the thing you are calling) */ from "./components/JobCard"
import personsData from './Data/personsData';
import Button from './components/Button';


/* function Card(props) {
  return (
    <p className="card">
      Hello, {props.firstname} {props.lastname} : {props.message}
    </p>
  );
}; */

function App() {
  return (
    <>

    </>
  );
}




/*                APP FUNCTION BEFORE ROUTE
function App() {
  const [isLoggedin, setIsLoggedIn] = useState(true);
  const [persons, setPersons] = useState(personsData); // State for persons data

  const handleAnimalChange = (id, newAnimal) => {
    setPersons((prevPersons) =>
      prevPersons.map((person) =>
        person.id === id ? { ...person, animal: newAnimal } : person
      )
    );
  };

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div className="app">
      <h1>Welcome to Our App</h1>
      {isLoggedin ? (
        <div id='JobCardDiv'>
          <p>The list</p>
          {persons.map((person) => (
            <JobCard
              key={person.id}
              id={person.id}
              name={person.firstName}
              title={person.title}
              age={person.age}
              animal={person.animal}
              onAnimalChange={handleAnimalChange} // Pass down the function
            />
          ))}
          <button onClick={toggleLogin}>Log Out</button>
        </div>
      ) : (
        <button onClick={toggleLogin}>Log in</button>
      )}
    </div>
  );
} */

export default App