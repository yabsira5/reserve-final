import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import NavBar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
// import images from `http://localhost/fileupload/hotel/images/hotel/images`;

import '../pages/list/list.css'

export default function ListHotel(){
 
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [hotels,setHotels] = useState([]);

   useEffect(() => {
     getHotels();
},[]);

function getHotels(){
 axios.get('http://localhost/Hotel/hotel/').then(function($response){
    console.log($response.data);
    setHotels($response.data);
 });
}

const deleteHotel = (id) =>{
 axios.delete(`http://localhost/hotel/hotel/${id}/delete`).then(function(response){
  console.log(response.data);
     getHotels();
 });
}

// handle open function
const handleOpen = (i) => {
  setSlideNumber(i);
  setOpen(true);
};

// Handle Move Function
const handleMove = (direction) => {
  let newSlideNumber;

  if (direction === "l") {
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
  } else {
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
  }

  setSlideNumber(newSlideNumber);
};
    
  return(
   <div>
    <div className="list">
      <Sidebar />
      
      <div className="listContainer">
        <NavBar />

    <div className="datatableTitle">
        <h1>List Hotel</h1>
        <Link to="/hotels/newHotel" className="link">
          Add New
        </Link>
      </div>

      <div className="tableRoom">
      <table> 
           <thead>
                 <tr>
                  <th>hotelCode</th>
                  <th>hotelName</th>
                  <th>type</th>
                  <th>city</th>
                  <th>address</th>
                  <th>title</th>
                  <th>Image</th>
                  <th>descrp</th>
                  <th>rating</th>
                  <th>rooms</th>
                  <th>cheapestPrice</th>
                  <th>featured</th>
                  <th>Actions</th>
                 </tr>
            </thead>   
            <tbody>
            {hotels.map((hotel,key) =>
              <tr key={key}>
                     {/* <div>{hotel.photo.split(',')}</div> */}
                    <td>{hotel.HotelCode}</td>
                    <td>{hotel.name}</td>
                    <td>{hotel.type}</td>
                    <td>{hotel.city}</td>
                    <td>{hotel.address}</td>
                    <td>{hotel.title}</td>
                    <td>{hotel.photo.split(',').map((img)=>(<img
                      //  onClick={setOpen(true)} 
                      src={`http://localhost/fileupload/hotel/images/${img}`} 
                      width='100' height={100}/>
                      ))}
                      </td>
                    <td>{hotel.disc}</td>
                    <td>{hotel.rating}</td>
                    <td>{hotel.rooms}</td>
                    <td>{hotel.cheapestPrice}</td>
                    <td>{hotel.featured}</td>
                    <td>
                      <Link to={`hotel/${hotel.HotelCode}/edit`}>Edit</Link>
                      <button onClick={() => deleteHotel(hotel.HotelCode)}>Delete</button>
                    </td>
                    
              </tr>
              )}
            
              </tbody>
      </table> 
    
        </div>
        </div>
        </div>
  
    </div>
  )

  // axios.get()
    // .then(($response) => {
    //   console.log($response)
    //   setUsers($response.data)
    // })
    // .catch(($err) => {
    //   console.log($err)
    // });
  
}