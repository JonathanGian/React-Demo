
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
/*   const [person, setPerson] = useState({
    firstName: "Margit",
    title: "Developer",
    age: 52,
    animal: "Cat"
  }); */
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

/* return (

  <div className='page'>
    <header>Logo</header>
    <main>
      {personsData.map((person) =>
        <JobCard
          key = {person.id}
          name = {person.firstName}
          title = {person.title}
          age = {person.age}
          animal = {person.animal}
        />)} */

{/* 
      <JobCard name={person.firstName} title={person.title} age={person.age} animal={person.animal}/>
      <JobCard name= "Katarina" title= "Developer" age= "25"/>
      <JobCard name= "Maria" title= "Designer" age= "55"/>
      <JobCard name= "Markus" title= "Worker" age= "34"/>
      <JobCard name= "Jimmy" title= "Artist" age= "21"/>
      <JobCard name= "Bob" title= "Intern" age= "65"/> */}
/*       </main>
    </div> */

/*     <main>
    <Card firstname= "Jonathan" lastname = "Gian" message= "This will be the first message"/>
    <Card firstname = "Dave" lastname = "Bush" message = "Second message!"/>
    <Card firstname = "Bob" lastname = "Pääkkönen" message = "Third message!"/>
    <Card/>
    </main> */
/*   )
} */

export default App
