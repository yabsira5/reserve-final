import { useState } from "react"
import axios from "axios";
import { useNavigate} from "react-router-dom";
import './tableDesign.css'

const NewHotel = () => {
  const navigate = useNavigate();

 
  
      const [Inputs, setFormValues] = useState({
  
        name:"",
        type:"",
        city:"",
        address:"",
        distance:"",
        title:"",
        disc:"",
        rating:"",
        rooms: "",
        price:"",
        cheapestPrice:"",
        featured:"",
       });
      const[selectedFile, setSelectedFile] = useState([]);

        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormValues({...Inputs,[name]: value,});
        };

        const handleChangefile =(e) => {
         
          setSelectedFile(e.target.files);
          console.log(e.target.files);
      
        };
        console.log(selectedFile)

      

        const handleSubmit = (event) => {
          event.preventDefault();

        

           const formData = new FormData();
           formData.append("name", Inputs.name);
           formData.append("type", Inputs.type);
           formData.append("city", Inputs.city);
           formData.append("address", Inputs.address);
           formData.append("distance", Inputs.distance);
           for (let i = 0; i < selectedFile.length; i++){
            formData.append('file[]', selectedFile[i])
           }
           
           formData.append("title", Inputs.title);
           formData.append("disc", Inputs.disc);
           formData.append("rating", Inputs.rating);
           formData.append("rooms",Inputs.rooms);
           formData.append("price", Inputs.price);
           formData.append("cheapestPrice", Inputs.cheapestPrice);
           formData.append("featured", Inputs.featured);
           
           console.log(formData);
        
          axios.post('http://localhost/fileupload/hotel/upload.php',formData)
    
          .then((result)=>{
            if(result.status === 201 && result.post ) {
            alert('Invalid Hotel');
            }
            else {
              console.log(result.data)
               alert("Hotel added succscsfully!");
               navigate('/hotels')
               }
          })
       

        }
      

  return (
    <div className="addBody">
      <div className="roomForm"></div>               
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <h1>Add New Hotel</h1>
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
          
          <div>
          <input className="managerinput" type="file"  name="file[]" multiple onChange={handleChangefile}/>
        
          </div>
          
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
        <label className="managerlabel">price:
          <input className="managerinput" value={Inputs.price || ""} type="number" name="price" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">cheapestPrice:
          <input className="managerinput" value={Inputs.cheapestPrice || ""} type="number" name="cheapestPrice" onChange={handleChange}/>
        </label>
        <br/>
        <label className="managerlabel">featured:
          <input className="managerinput" value={Inputs.featured || ""} type="text" name="featured" onChange={handleChange}/>
        </label>
        <br/>
        <button className="managerbutton" type="submit" name="submit">Submit</button>
      </form>
      
     
        
      </div>
  )
}

export default NewHotel