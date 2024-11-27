import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";
import persons from "../Data/personsData";


const List = () => {
  const [isLoggedin, setIsLoggedIn] = useState(true);
   /*  const [personData, setPersons] = useState(persons);  */// State for persons data
    const navigate = useNavigate();
    const [posts, setPosts]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    // Navigation onClick
    const handleNavigate = (id) => {
    console.log(id)
        navigate(`/${id}`)
        
    };

    const handleAnimalChange = (id, newAnimal) => {
      setPosts((prevPosts) =>
          prevPosts.map((person) =>
              person.id === id ? { ...person, animal: newAnimal } : person
          )
      );
  };
   // Fetch Data from API
   useEffect(() => {
    fetch("http://localhost:3001/jobCards")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            setPosts(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Failed to fetch jobCards:", error);
            setIsLoading(false);
        });
}, []);


  
    const toggleLogin = () => {
      setIsLoggedIn((prevState) => !prevState);
    };


    return (
      <div className="app">
          <h1>Welcome to Our App</h1>
          {isLoading ? (
              <h2>Loading...</h2>
          ) : (
              <div id="JobCardDiv">
                  <p>The list</p>
                  {posts.map((person) => (
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
          )}
      </div>
  );
    }

    


export default List;

{/* <div className="app">
<h1>Welcome to Our App</h1>
{isLoggedin ? (
  <div id='JobCardDiv'>
    <p>The list</p>
    {posts.map((person) => (
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
</div> */}