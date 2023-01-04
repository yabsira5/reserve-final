import { useState,useEffect } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './tableDesign.css'

export default function EditManager(){
  
  const navigate = useNavigate();
  
  const [Inputs, setInputs] = useState({});
  
  const {EmployeeID} = useParams();

   useEffect(() => { 
    getEmp();
  },[]);
  
  function getEmp(){
    axios.get(`http://localhost/Emp/employee/${EmployeeID}`).then(function ($response){
      console.log($response.data);
      console.log(EmployeeID);
      setInputs($response.data);  
    });
}

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

    setInputs(values => ({...values, [name]: value}));
      //... to create single jsone date fro th form inputs.
  }

  const handelSubmit = (event) => {
   event.preventDefault();
    
   axios.put(`http://localhost/Emp/employee/${EmployeeID}/edit`,Inputs).then(function ($response){
    console.log($response.data);
    navigate("/");
   
   });
   
  }
  return(
      <div className="roomBody">
        <form onSubmit={handelSubmit}>
      <h1>Edit Employee</h1>
      
        <label>HotelCode:
          <input value={Inputs.HotelCode} type="number" name="HotelCode" onChange={handleChange}/>
        </label>
        <br/>
        <label>FirstName:
          <input value={Inputs.FirstName} type="text" name="FirstName" onChange={handleChange}/>
        </label>
        <br/>
        <label>LastName:
          <input value={Inputs.LastName} type="text" name="LastName" onChange={handleChange}/>
        </label>
        <br/>
        <label>Email:
          <input value={Inputs.Email} type="text" name="Email" onChange={handleChange}/>
        </label>
        <br/>
        <label>Password:
          <input value={Inputs.Password} type="text" name="Password" onChange={handleChange}/>
        </label>
        <br/>
      
        <button>Update</button>

      </form>
    
      </div>
     )
  }