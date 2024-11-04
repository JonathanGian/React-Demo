function JobCard(props){
    return (
      <div className='jobCard'>
      <h2>{props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
      <p>Spirit Animal: {props.animal}</p>
      </div>
    );
  };

  export default JobCard;