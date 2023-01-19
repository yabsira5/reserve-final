import { useState,useEffect } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './Room.css'

export default function EditRoom(){
  
  const navigate = useNavigate();
  
  const [Inputs, setInputs] = useState({});
  const[selectedFile, setSelectedFile] = useState(null);

  
  const {RoomNo} = useParams();

   useEffect(() => { 
    getRoom();
  },[]);
  
  function getRoom(){
    axios.get(`http://localhost/Eroom/room/${RoomNo}`).then(function ($response){
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

  const handleChangefile =(e) => {
         
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);

  };

  const handelSubmit = (event) => {
   event.preventDefault();

   const formData = new FormData();

   formData.append("RoomNo", RoomNo);
   formData.append("file", selectedFile);
   axios.post( `http://localhost/fileupload/room/insert.php`,formData)
          .then((result)=>{
            console.log(result.data);
          })
    
   axios.put(`http://localhost/Room/room/${RoomNo}/edit`,Inputs).then(function ($response){
    console.log($response.data);
    navigate("/hotels");
   
   });
   
  }
  return(
      <div className="roomBody">
        <div className="roomForm">
        <form onSubmit={handelSubmit}>

        <h1>Edit Room</h1>
        <label className="roomlabel">Title:
          <input className="roominput" value={Inputs.title} type="text" name="title" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomrlabel">
          <h4>Update  Photo for the Room</h4>
          <div>
          <input className="roominput" type="file"  name="file"  onChange={handleChangefile}/>
          </div>        
        </label>
        <label className="roomlabel">Price:
          <input className="roominput" value={Inputs.price} type="text" name="price" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">Maxpeople:
          <input  className="roominput" value={Inputs.maxpeople} type="number" name="maxpeople" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">Description:
          <input className="roominput" value={Inputs.disc} type="text" name="disc" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">Room Number:
          <input className="roominput" value={Inputs.roomNumbers} type="number" name="roomNumbers" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">Booked Status:
          <input className="roominput" value={Inputs.Booked_Status} type="number" name="Booked_Status" onChange={handleChange}/>
           
        </label>
        <br/>
      
        <button className="roombutton">Update</button>

      </form>
    
    </div>
      </div>
     )
  }