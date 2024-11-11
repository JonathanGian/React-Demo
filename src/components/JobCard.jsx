function JobCard({name,title,age,animal }){
    return (
      <div className='jobCard'>
      <h2>{name}</h2>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>Spirit Animal: {animal}</p>
      </div>
    );
  };

  export default JobCard;