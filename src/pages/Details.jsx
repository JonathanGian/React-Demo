import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import persons from "../Data/personsData";


const Details = () => {
const navigate = useNavigate();


    const {id} = useParams();
   // Checks if the persons id === id after the / in URL    
const person = persons.find((person) => person.id === parseInt(id));

return (
        <div>
            <h2>Details page for {person.firstName}</h2>
            <p>Title: {person.title}</p>
            <p>Age: {person.age}</p>
            <p>Animal: {person.animal}</p>
            <Button
            text="Back to List"
            onClick={() => navigate("/")}
            />
        </div>
    )
};

export default Details;