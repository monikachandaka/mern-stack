
const DisplayMyDetails=(props)=>{
    console.log(props);
    
    return(  
        <>
        <h1>My Details</h1>
          <h4>name: {props.name}</h4>
          <h4>Rollno:{props.rollno}</h4>
            <h4>clg:{props.clg}</h4>
            <h4>role:{props.role}</h4>
</>
    )
}
export default DisplayMyDetails;