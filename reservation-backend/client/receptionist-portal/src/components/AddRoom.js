import { useState} from "react"
import axios from "axios";
import { useNavigate} from "react-router-dom";
import './Room.css'

export default function AddRoom(){
  
  const navigate = useNavigate();
  
  const [Inputs, setInputs] = useState({});
  const[selectedFile, setSelectedFile] = useState(null);
  

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

   formData.append("HotelCode", Inputs.HotelCode);
   formData.append("title", Inputs.title);
   formData.append("file", selectedFile);
   formData.append("price", Inputs.price);
   formData.append("maxpeople", Inputs.maxpeople);
   formData.append("disc", Inputs.disc);
   formData.append("roomNumbers", Inputs.roomNumbers);
    
   axios.post('http://localhost/fileupload/room/upload.php',formData).then(function ($response){
    console.log($response.data);
     navigate("/");
   
   });
   
  }
  return(
      <div className="roomBody">
        <div className="roomForm">
        <form onSubmit={handelSubmit} >
      <h1>Add Room</h1>
      
        <label className="roomlabel">HotelCode:
          <input className="roominput" value={Inputs.HotelCode} type="number" name="HotelCode" onChange={handleChange}/>
        </label>
        <label className="roomlabel">title:
          <input className="roominput" value={Inputs.title} type="text" name="title" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomrlabel">
          <h4>Select a Photo for the Room</h4>
          <div>
          <input className="roominput" type="file"  name="file"  onChange={handleChangefile}/>
          </div>        
        </label>
        <label className="roomlabel">price:
          <input className="roominput" value={Inputs.price} type="number" name="price" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">maxpeople:
          <input className="roominput" value={Inputs.maxpeople} type="number" name="maxpeople" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">description:
          <textarea className="roominput" value={Inputs.disc} type="text" name="disc" onChange={handleChange}/>
        </label>
        <br/>
        <label className="roomlabel">roomNumber:
          <input className="roominput" value={Inputs.roomNumbers} type="number" name="roomNumbers" onChange={handleChange}/>
        </label>
        <br/>
      
        <button className="roombutton" name="submit">Submit</button>

      </form>
      </div>
      </div>
     )
  }