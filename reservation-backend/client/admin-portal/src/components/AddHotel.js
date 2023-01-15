import { useState } from "react"
import axios from "axios";
import { useNavigate} from "react-router-dom";
import './tableDesign.css'

const NewHotel = () => {
  const navigate = useNavigate();

  // const [file, setFile] = useState("");
 //const   nav = useNavigate();

  
      const [Inputs, setFormValues] = useState({
        // HotelCode: "",
        name:"",
        type:"",
        city:"",
        address:"",
        distance:"",
        title:"",
        disc:"",
        rating:"",
        rooms: "",
        cheapestPrice:"",
        featured:"",
       });
      const[selectedFile, setSelectedFile] = useState(null);

        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormValues({...Inputs,[name]: value,});
        };

        const handleChangefile =(e) => {
          console.log(e.target.files[0]);
          setSelectedFile({selectedFile: e.target.files[0]});
          console.log({selectedFile: e.target.files[0]})
          console.log(selectedFile);
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();

          const formData = new FormData();
           formData.append("fileData", selectedFile);
           console.log(formData);
          const sendData = {
            // HotelCode:Inputs.HotelCode,
            name:Inputs.name,
            type:Inputs.type,
            city:Inputs.city,
            address:Inputs.address,
            distance:Inputs.distance,
            photo:formData,
            title:Inputs.title,
            disc:Inputs.disc,
            rating:Inputs.rating,
            rooms: Inputs.rooms,
            cheapestPrice:Inputs.cheapestPrice,
            featured:Inputs.featured,
          }
          console.log(sendData);
          axios.post('http://localhost/fileupload/hotel/insert.php',sendData)
    
          .then((result)=>{
            if(result.status === 201 && result.post ) {
            alert('Invalid Hotel');
            }
            else {
              console.log(result.data)
              // alert("Hotel added succscsfully!");
              // navigate('/hotels')
               }
          })
       

        }
        // const fileSubmit =(e)=>{
        //   e.preventDefault();
        //   const formData = new FormData();
        //   formData.append("photo", selectedFile);
        //   axios.post(`http://localhost/upload/hotel/${Inputs.HotelCode}`, formData)      
        // }

  return (
    <div className="addBody">
      <div className="roomForm"></div>               
      <form onSubmit={handleSubmit}>
      <h1>Add New Hotel</h1>
      {/* <label className="managerlabel">HotelCode:
          <input className="managerinput" value={Inputs.HotelCode || ""} type="text" name="HotelCode" onChange={handleChange}/>
        </label>
        <br/> */}
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
        <label className="managerlabel">Distance:
          <input className="managerinput" value={Inputs.distance || ""} type="text" name="distance" onChange={handleChange}/>
        </label>
        <label className="managerlabel">
          <h4>Select a Photo of the Hotel</h4>
          <input className="managerinput" type='file' onChange={handleChangefile} name='photo'multiple/>
          {/* <div><button>Upload Image</button></div> */}
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
        <button className="managerbutton">Submit</button>
      </form>
      
      {/* <label onSubmit={fileSubmit}>
          <div>Select a Photo of the Hotel</div>
          <input  type='file' onChange={handleChangefile} name='photo[]'multiple/>
          <div><button>Upload Image</button></div>
        </label> */}
        
      </div>
  )
}

export default NewHotel