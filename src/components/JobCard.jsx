import Button from "./Button";

function JobCard({name,title,age,animal,AppClick }){
    return (
      <div className='jobCard'>
      <h2>{name}</h2>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>Spirit Animal: {animal}</p>
    <Button text = "Edit" cardClick={AppClick}/>
      </div>

    );
  };

  export default JobCard;