import { useState} from "react"
import axios from "axios";
import { useNavigate} from "react-router-dom";
import './Room.css'

export default function AddRoom(){
  
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
    
   axios.post(`http://localhost/Room/room/save`,Inputs).then(function ($response){
    console.log($response.data);
    navigate("/");
   
   });
   
  }
  return(
      <div className="roomBody">
        <div className="roomForm">
        <form onSubmit={handelSubmit}>
      <h1>Add Room</h1>
      
        <label className="roomlabel">RoomNo:
          <input className="roominput" value={Inputs.RoomNo} type="number" name="RoomNo" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">HotelCode:
          <input className="roominput" value={Inputs.HoteCode} type="number" name="HotelCode" onChange={handleChange}/>
        </label>
        <label className="roomlabel">title:
          <input className="roominput" value={Inputs.title} type="text" name="title" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">price:
          <input className="roominput" value={Inputs.price} type="text" name="price" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">maxpeople:
          <input className="roominput" value={Inputs.maxpeople} type="number" name="maxpeople" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">discription:
          <input className="roominput" value={Inputs.disc} type="text" name="disc" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">roomNumber:
          <input className="roominput" value={Inputs.roomNumbers} type="number" name="roomNumbers" onChange={handleChange}/>
        </label>
        <br/>
      
        <button className="roombutton">Submit</button>

      </form>
      </div>
      </div>
     )
  }