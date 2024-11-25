import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";
import persons from "../Data/personsData";

const List = () => {
    const [isLoggedin, setIsLoggedIn] = useState(true);
    const [personData, setPersons] = useState(persons); // State for persons data
    const navigate = useNavigate();
  
    // Navigation onClick
    const handleNavigate = (id) => {
    console.log(id)
        navigate(`/${id}`)
        
    };

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
              {personData.map((person) => (
                <JobCard
                  key={person.id}
                  id={person.id}
                  name={person.firstName}
                  title={person.title}
                  age={person.age}
                  animal={person.animal}
                  onAnimalChange={handleAnimalChange} // Pass down the function
                  onClick={() => handleNavigate(person.id)}
                />
              ))}
              <button onClick={toggleLogin}>Log Out</button>
            </div>
          ) : (
            <button onClick={toggleLogin}>Log in</button>
          )}
        </div>
      );
    }

    


export default List;