import axios from "axios";
import React, { useEffect, useState} from "react";
// import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import NavBar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import '../pages/list/list.css';
import  {ToastContainer,toast} from 'react-toastify';

export default function ListBooked(){

  let {hotel} = useParams();
  
  const [item, setItems] = useState([]);
  useEffect (() => { 
    hotel = JSON.parse(localStorage.getItem('authemp'));
    if(hotel){
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

function deleteBooked(BookingID){
  
  axios.delete(`http://localhost/Booking/booking/${BookingID}`).then(function ($response){
    console.log($response.data);
    getBooked();
   
  });
}

     const sendSMS = async(Phone) => {
      
     
      const params = new URLSearchParams();
params.append('Body','Thanks for Booking with us if you want to cancel your booking you can contact the hotel which there phone number is on there discription');
params.append('To',Phone);
params.append('From','+13855263468');


     await (axios.post('https://api.twilio.com/2010-04-01/Accounts/AC95142347bfbeb71e3d381481b14fa5a2/Messages.json',params,  { headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',},
        auth: {
          username: 'AC95142347bfbeb71e3d381481b14fa5a2',
          password: '24bf07e909e212b70d8f4fd6d420dfed'
        }
      })).then((res) => {
        console.log(res.data)
        toast.success('✉️ SMS Sent!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }).catch((error) =>{
        console.log(error);
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
      <div className="tableRoom">
      <table className="styled-table">
            <thead>
            <tr>
              <th>Booking ID</th>
              <th>Room ID</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Customer Phone</th>
              <th>Room Number</th>
              <th>Booking Date</th>
              <th>CheckIn</th>
              <th>CheckOut</th>
              <th>Number of Adults</th>
              <th>Number of Childern</th>
              <th>Send Verification</th>
              <th>Is it still Booked ?</th>
              <th>Cancel</th>
            </tr>
           </thead>

        <tbody>
        {item.map((room, key) =>
           <tr key={key}>
               <td>{room.BookingID}</td>
               <td>{room.RoomNo}</td>
               <td>{room.Username}</td>
               <td>{room.Email}</td>
               <td>{room.Phone}</td>
               <td>{room.roomNumbers}</td>
               <td>{room.BookingDate}</td>
               <td>{room.CheckIn}</td>
               <td>{room.CheckOut}</td>
               <td>{room.NumAdults}</td>
               <td>{room.NumChildren}</td>
               <td>
                <button className="roombutton" onClick={() => sendSMS(room.Phone)}>Send SMS</button>
                <ToastContainer/>
               </td>
               <td>
                <select value={room.Booked_Status} style={{appearance: "none",border: "none",outline: "none"}}> 
               <option value="0" hidden>Not Booked</option>
               <option value="1"hidden>Booked</option>
              
               </select>
               </td>
               <td>
                <button className="roombutton" onClick={() => deleteBooked(room.BookingID)}>Cancel</button>
               </td>
               
                       
           </tr>
        )}  
        </tbody> 
        </table>
        </div> 
        </div>
        </div>
    </>
  )
 
}