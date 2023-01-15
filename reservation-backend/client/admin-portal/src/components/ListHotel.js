import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import NavBar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

import '../pages/list/list.css'

export default function ListHotel(){
 
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
                    <td>{hotel.HotelCode}</td>
                    <td>{hotel.name}</td>
                    <td>{hotel.type}</td>
                    <td>{hotel.city}</td>
                    <td>{hotel.address}</td>
                    <td>{hotel.title}</td>
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