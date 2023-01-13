import { useState,useEffect } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './tableDesign.css'

export default function EditHotel(){
  
    const navigate = useNavigate();
    
    const [Inputs, setInputs] = useState({});
    
    const {HotelCode} = useParams();
  
     useEffect(() => { 
      getUser();
    },[]);
    
    function getUser(){
      axios.get(`http://localhost/Hotel/hotel/${HotelCode}`).then(function ($response){
        console.log($response.data);
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
      
     axios.put(`http://localhost/Hotel/hotel/${HotelCode}/edit`,Inputs).then(function ($response){
      console.log($response.data);
      navigate("/hotels");
     
     });
     
    }
    return(
      <div className="roomBody">
        <div className="roomForm">

      <form onSubmit={handelSubmit}>
      <h1>Edit Hotel</h1>

        <label className="managerlabel">Name of the Hotel:
          <input className="managerinput" value={Inputs.name || ""} type="text" name="name" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">type:
          <input className="managerinput" value={Inputs.type || ""} type="text" name="type" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">City:
          <input className="managerinput" value={Inputs.city || ""} type="text" name="city" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">Address:
          <input className="managerinput" value={Inputs.address || ""} type="text" name="address" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">title:
          <input className="managerinput" value={Inputs.title || ""} type="text" name="title" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">descrp:
          <input className="managerinput" value={Inputs.disc || ""} type="text" name="disc" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">rating:
          <input className="managerinput" value={Inputs.rating || ""} type="number" name="rating" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">rooms:
          <input className="managerinput" value={Inputs.rooms || ""} type="number" name="rooms" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">cheapestPrice:
          <input className="managerinput" value={Inputs.cheapestPrice || ""} type="text" name="cheapestPrice" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">featured:
          <input className="managerinput" value={Inputs.featured || ""} type="text" name="featured" onChange={handleChange}/>
        </label>
        <br/>
        <button className="managerbutton">Update</button>
      </form>
      </div>
      </div> 
  )
  }