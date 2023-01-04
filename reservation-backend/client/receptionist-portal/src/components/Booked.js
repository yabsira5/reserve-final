import axios from "axios";
import React, { useEffect, useState} from "react";
// import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import NavBar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

import '../pages/list/list.css'

export default function ListBooked(){

  let {hotel} = useParams();
  
  const [item, setItems] = useState([]);
  useEffect (() => { 
    hotel = JSON.parse(localStorage.getItem('authemp'));
    if(hotel){
        setItems(hotel);
        console.log(hotel)
    };
    getBooked();
}, 
[]);
  
  function getBooked(){
    console.log('HotelCode:'+hotel)
    axios.get(`http://localhost/Booking/booking/${hotel}`).then(function ($response){
      console.log($response.data);
      setItems($response.data);  
    });
}

    


    
  return(
   <>
    <div className="list">
      <Sidebar />
      
      <div className="listContainer">
        <NavBar />
      
      <div className="datatableTitle">
        <h1>List Booked</h1>
      </div>
    
        <table>
            <thead>
            <tr>
              <th>BookingID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>roomNumbers</th>
              <th>BookingDate</th>
              <th>CheckIn</th>
              <th>CheckOut</th>
              <th>NumAdults</th>
              <th>NumChildern</th>
            </tr>
           </thead>

        <tbody>
        {item.map((room, key) =>
           <tr key={key}>
               <td>{room.BookingID}</td>
               <td>{room.Username}</td>
               <td>{room.Email}</td>
               <td>{room.Phone}</td>
               <td>{room.roomNumbers}</td>
               <td>{room.BookingDate}</td>
               <td>{room.CheckIn}</td>
               <td>{room.CheckOut}</td>
               <td>{room.NumAdults}</td>
               <td>{room.NumChildren}</td>
               
                       
           </tr>
        )}  
        </tbody> 
        </table> 
        </div>
        </div>
    </>
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