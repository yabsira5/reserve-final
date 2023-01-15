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
      <div className="editBody">
        <div className="roomForm">
        <form onSubmit={handelSubmit}>
      <h1>Add Manager</h1>
      
      {/* <label className="managerlabel">EmployeeID:
          <input className="managerinput" value={Inputs.EmployeeID} type="number" name="EmployeeID" onChange={handleChange}/>
        </label>
        <br/> */}
      <label className="managerlabel">HotelCode:
          <input className="managerinput" value={Inputs.HotelCode} type="number" name="HotelCode" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">FirstName:
          <input className="managerinput" value={Inputs.FirstName} type="text" name="FirstName" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">LastName:
          <input className="managerinput" value={Inputs.LastName} type="text" name="LastName" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">Email:
          <input className="managerinput" value={Inputs.Email} type="text" name="Email" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">Password:
          <input className="managerinput" value={Inputs.Password} type="text" name="Password" onChange={handleChange}/>
        </label>
        <br/>
      
        <button className="managerbutton">Submit</button>

      </form>
      </div>
      </div>
     )
  }