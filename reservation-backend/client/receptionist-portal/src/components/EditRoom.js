import { useState,useEffect } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './Room.css'

export default function EditRoom(){
  
  const navigate = useNavigate();
  
  const [Inputs, setInputs] = useState({});
  
  const {RoomNo} = useParams();

   useEffect(() => { 
    getRoom();
  },[]);
  
  function getRoom(){
    axios.get(`http://localhost/Room/room/${RoomNo}`).then(function ($response){
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
    
   axios.put(`http://localhost/Room/room/${RoomNo}/edit`,Inputs).then(function ($response){
    console.log($response.data);
    navigate("/hotels");
   
   });
   
  }
  return(
      <div className="roomBody">
        <form onSubmit={handelSubmit}>

        <h1>Edit Room</h1>
      
      
        <label>RoomNo:
          <input value={Inputs.RoomNo} type="number" name="RoomNo" onChange={handleChange}/>
        </label>
        <br/>
        <label>title:
          <input value={Inputs.title} type="text" name="title" onChange={handleChange}/>
        </label>
        <br/>
        <label>price:
          <input value={Inputs.price} type="text" name="price" onChange={handleChange}/>
        </label>
        <br/>
        <label>maxpeople:
          <input value={Inputs.maxpeople} type="number" name="maxpeople" onChange={handleChange}/>
        </label>
        <br/>
        <label>discription:
          <input value={Inputs.disc} type="text" name="disc" onChange={handleChange}/>
        </label>
        <br/>
        <label>roomNumber:
          <input value={Inputs.roomNumbers} type="number" name="roomNumbers" onChange={handleChange}/>
        </label>
        <br/>
      
        <button>Update</button>

      </form>
    
      </div>
     )
  }