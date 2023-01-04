import { useState} from "react"
import axios from "axios";
import { useNavigate} from "react-router-dom";


export default function AddManager(){
  
  const navigate = useNavigate();
  
  const [Inputs, setInputs] = useState({});
  

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

    setInputs(values => ({...values, [name]: value}));
      //... to create single jsone date fro th form inputs.
  }

  const handelSubmit = (event) => {
   event.preventDefault();
    
   axios.post(`http://localhost/Emp/emp/save`,Inputs).then(function ($response){
    console.log($response.data);
    navigate("/managers");
   
   });
   
  }
  return(
      <div className="roomBody">
        <form onSubmit={handelSubmit}>
      <h1>Add Manager</h1>
      
      <label>EmployeeID:
          <input value={Inputs.EmployeeID} type="number" name="EmployeeID" onChange={handleChange}/>
        </label>
        <br/>
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
      
        <button>Submit</button>

      </form>
    
      </div>
     )
  }