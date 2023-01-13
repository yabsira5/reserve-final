import { useState,useEffect } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './tableDesign.css'

export default function EditGuest(){
  
  const navigate = useNavigate();
  
  const [Inputs, setInputs] = useState({});
  
  const {UserID} = useParams();

   useEffect(() => { 
    getUser();
  },[]);
  
  function getUser(){
    axios.get(`http://localhost/User/user/${UserID}`).then(function ($response){
      console.log($response.data);
      console.log(UserID);
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
    
   axios.put(`http://localhost/User/user/${UserID}/edit`,Inputs).then(function ($response){
    console.log($response.data);
    navigate("/users");
   
   });
   
  }
  return(
      <div className="editBody">
        <div className="roomForm">
        <form onSubmit={handelSubmit}>
      <h1>Edit Guest</h1>
      
        <label className="managerlabel">UserName:
          <input className="managerinput" value={Inputs.Username} type="text" name="Username" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">Email:
          <input className="managerinput" value={Inputs.Email} type="text" name="Email" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">Country:
          <input className="managerinput" value={Inputs.Country} type="text" name="Country" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">City:
          <input className="managerinput" value={Inputs.City} type="text" name="City" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">Phone:
          <input className="managerinput" value={Inputs.Phone} type="text" name="Phone" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">Password:
          <input className="managerinput" value={Inputs.Password} type="text" name="Password" onChange={handleChange}/>
        </label>
        <br/>
      
        <button className="managerbutton">Update</button>

      </form>
      </div>
      </div>
     )
  }