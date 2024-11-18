
import { useState } from "react";
import Button from "./Button";

function JobCard({ id, name, title, age, animal, onAnimalChange }) {
  const [animalValue, setAnimalValue] = useState(animal);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => setAnimalValue(e.target.value);

  const toggleEdit = () => {
    if (isEditing) {
      // Save the new value and send it to the parent component
      onAnimalChange(id, animalValue);
    }
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="jobCard">
      <p>{name}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      {isEditing ? (
        <input type="text" value={animalValue} onChange={handleChange} />// If true it shows this code
      ) : (
        <p>Animal: {animalValue}</p> // False shows this code
      )}
      <Button
      cardClick={toggleEdit}
      text={isEditing ? "Save" : "Edit"} /> {/* Basic if else broken down  */} 
    </div>
  );
}

export default JobCard;