import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/appRoutes'; // This has to be in curly brackets because it was a named export.

function App() {
  return (
  <RouterProvider
      router={router}
      future={{
      v7_startTransition: true,
  }}
  />

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