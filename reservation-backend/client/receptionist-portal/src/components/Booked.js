import axios from "axios";
import React, { useEffect, useState} from "react";
// import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import NavBar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
// import emailjs from "emailjs-com";
import twilio from "twilio";
// import * as dotenv from "dotenv";

import '../pages/list/list.css'

// import { stripBasename } from "@remix-run/router";

export default function ListBooked(){


  let {hotel} = useParams();
  
  const [item, setItems] = useState([]);
  const[phone, setphone] = useState('');
  // const [to_name,setTo_Name] = useState("");
  // const [from_name,setfrom_Name] = useState("");
  useEffect (() => { 
    hotel = JSON.parse(localStorage.getItem('authemp'));
    if(hotel){
        // setItems(hotel);
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

// const sendInfo = (Username,Email) => {
//   setTo_Name(Username);
//   setfrom_Name(Email)
//   console.log(to_name + from_name);

//   const emailContent = {
//     to_name: to_name,
//     from_name: from_name,
//   };

//   emailjs.send('service_33phd3r','',emailContent,).then((res) => {
//     console.log(res.text);
//   },(error)=>{
//     console.log(error.text);
//   });
// }
     const sendSMS = (Phone) => {
      setphone(Phone);
      console.log(Phone);
      console.log(phone);
      const client = new twilio('AC95142347bfbeb71e3d381481b14fa5a2' , '08ee3cb4f0fcd49320c806a34a27ac3b');
console.log(phone);
     
    const cli =  client.messages
      .create({
        body:'Thanks for Booking with us if you want to cancel your booking you can contact the hotel which there phone number is on there discription',
        from:'+13855263468',
        to:phone});
      // .then(message =>{ console.log(message , "Message sent") })
      // .catch(err => {console.log(err , "Message not sent")})
      console.log(phone);

      axios.post('/api/messages',cli)
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

  // axios.get()
    // .then(($response) => {
    //   console.log($response)
    //   setUsers($response.data)
    // })
    // .catch(($err) => {
    //   console.log($err)
    // });
  
}