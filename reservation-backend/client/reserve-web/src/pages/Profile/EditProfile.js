import { useState,useEffect } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './tableDesign.css'

export default function EditProfile(){
  
  const navigate = useNavigate();
  
  const [Inputs, setInputs] = useState([]);
  
  const {UserID} = useParams();

   useEffect(() => { 
    getUser();
  },[]);
  
  function getUser(){
    axios.get(`http://localhost/User/Edit/${UserID}`).then((response)=>{
      console.log(response.data);
      console.log(UserID);
      setInputs(response.data);  
      console.log(Inputs);
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
    navigate("/Profile");
   
   });
   
  }
  return(
      <div className="roomBody">
        <form onSubmit={handelSubmit}>
      <h1>Edit Profile</h1>
      
        <label>UserName:
          <input value={Inputs.Username} type="text" name="Username" onChange={handleChange}/>
        </label>
        <br/>
        <label>Email:
          <input value={Inputs.Email} type="text" name="Email" onChange={handleChange}/>
        </label>
        <br/>
        <label>Counrtry:
          <input value={Inputs.Country} type="text" name="Country" onChange={handleChange}/>
        </label>
        <br/>
        <label>City:
          <input value={Inputs.City} type="text" name="City" onChange={handleChange}/>
        </label>
        <br/>
        <label>Phone:
          <input value={Inputs.Phone} type="text" name="Phone" onChange={handleChange}/>
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