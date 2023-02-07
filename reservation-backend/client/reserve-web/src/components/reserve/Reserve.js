import React from 'react'
import './Reserve.css';
import { useNavigate,useParams,useLocation } from 'react-router-dom';
import { useContext, useState,useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import  {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/navbar/Navbar'
const Reserve = () => {
    const location = useLocation();
   const RoomNo = location.pathname.split("/")[2];
   
     let {UserID} = useParams();
    const [profiles, setProfile] = useState([]);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const navigate = useNavigate();

    useEffect (() => {
    
         UserID = JSON.parse(localStorage.getItem('auth'));
        if(UserID===null){
            navigate('/login')
        }
        console.log(UserID);
        setProfile(UserID)
        


           

             axios.get(`http://localhost/Room/room/${RoomNo}`)
            .then(function ($response){
              setSelectedRooms($response.data);
              console.log($response.data)
            })
            console.log(RoomNo)
            console.log(selectedRooms)
            
               
        
    }, 
    []);
    const {dates, options} = useContext(SearchContext);
  
      console.log(dates);

    
    const sendData = {
        HotelCode:selectedRooms.HotelCode,
        UserID:profiles,
        RoomNo:selectedRooms.RoomNo,
        CheckIn:dates[0].startDate,
        CheckOut:dates[0].endDate,
        NumAdults:options.adult,
        NumChildren:options.children
    }

    console.log(sendData)
    const handleClick = () => {
        if(true) {
            axios.post(`http://localhost/Booking/booking/save`,sendData ).then(function($response){
                console.log($response.data)
            })
            alert('Room Booked')
       }
       navigate('/')
     };
     const backtohome = () => {
        navigate('/')
     }
  return (
    <>
    <Navbar/>
    <div className='reserve'>
        <div className="roomContainer">
            <img src="https://www.roadaffair.com/wp-content/uploads/2019/10/meyazia-27-square-addis-ababa-ethiopia-shutterstock_187152050.jpg"
             alt="Image of the room" className="hero" />

                <div className="summeryInfo container">
                    <h2 className="summeryTitle">Booking Summary</h2>    
                    <p className="summeryDescription">
                        Here below is the room booking that you selected     
                    </p> 
                </div>
                <div className="roomContainer container">
                    <div className="room">
                        <div className="roomInfo">
                             <h3 className="roomTitle">{selectedRooms.title}</h3>
                            <p className="roomPrice">From Hotel {selectedRooms.name}</p>
                        </div>
                        <div className="roomInfo">
                             <h3 className="roomTitle">Room Price</h3>
                            <p className="roomPrice">ETB {selectedRooms.price}</p>
                        </div>
                </div> 
            </div>
            
                <button className="proceedBtn btn container" onClick={handleClick}> 
                    Book Now     
                </button>
                <ToastContainer/>
                <button className="cancelBtn btn container" onClick={backtohome}>  
                    Cancel Booking        
                </button>
             
        </div>
    </div>
    </>
  )
}

export default Reserve;