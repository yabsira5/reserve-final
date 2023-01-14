import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import NavBar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

import '../pages/list/list.css'

export default function ListRooms(){

  let {hotelID} = useParams();
  
  const [item, setItems] = useState([]);
  useEffect (() => { 
    hotelID = JSON.parse(localStorage.getItem('authemp'));
    if(hotelID){
        setItems(hotelID);
        console.log(hotelID)
    }
    getRooms();
}, 
[]);
  
  function getRooms(){
    console.log('HotelCode:'+hotelID)
    axios.get(`http://localhost/Mroom/room/${hotelID}`).then(function ($response){
      console.log($response.data);
      setItems($response.data);  
    });
}

const deleteRoom = (RoomNo) => {
  axios.delete(`http://localhost/Room/room/${RoomNo}/delete`).then(function(response){
    console.log(response.data);
    getRooms();
  })
}  


    
  return(
   <div>
    <div className="list">
      <Sidebar />
      
      <div className="listContainer">
        <NavBar />
      
      <div className="datatableTitle">
        <h1>List Room</h1>
        <Link to="/hotels/new" className="link">
          Add New
        </Link>
      </div>
    
    <div className="tableRoom">
        <table>
            <thead>
            <tr>
              <th>RoomNo</th>
              <th>title</th>
              <th>price</th>
              <th>maxpeople</th>
              <th>discription</th>
              <th>roomNumbers</th>
              <th>Room Booked_Status</th>
              <th>Update Room Info</th>
              <th>Delete Room</th>
            </tr>
           </thead>

        <tbody>
        {item.map((room, key) =>
           <tr key={key}>
               <td>{room.RoomNo}</td>
               <td>{room.title}</td>
               <td>{room.price}</td>
               <td>{room.maxpeople}</td>
               <td>{room.disc}</td>
               <td>{room.roomNumbers}</td>
               <td>{room.Booked_Status}</td>
               
               <td>
                 <Link to={`room/${room.RoomNo}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                 </td>
                 <td>
                <button className="roombutton" onClick={() => deleteRoom(room.RoomNo)}>Delete</button>
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