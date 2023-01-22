import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import NavBar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import  {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../pages/list/list.css'

export default function ListRooms(){

  let {HotelCode} = useParams();
  
  const [item, setItems] = useState([]);
  useEffect (() => { 
    HotelCode = JSON.parse(localStorage.getItem('authemp'));
    if(HotelCode){
        // setItems(HotelCode);
        console.log(HotelCode)
    }
    getRooms();
}, []);
  
  function getRooms(){
    console.log('HotelCode:'+HotelCode)
    axios.get(`http://localhost/Mroom/room/${HotelCode}`).then(function ($response){
      console.log($response.data);
      setItems($response.data);
      console.log(item);  
    });
}

const deleteRoom = (RoomNo) => {
  axios.delete(`http://localhost/Room/room/${RoomNo}/delete`).then(function(response){
    console.log(response.data);
    getRooms();
    toast.error(' (っ °Д °;)っ (┬┬﹏┬┬) Room Deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
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
              <th>Photo</th>
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
               <td><img src ={`http://localhost/fileupload/room/images/${room.img}`} width='100' height={100}/></td>
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
                <ToastContainer />
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