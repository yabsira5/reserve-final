import React from 'react'
import './Reserve.css';
import { useNavigate } from 'react-router-dom';

const Reserve = ({setOpen}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(true) {
         navigate("/checkout");
       }
     };
  return (
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
                             <h3 className="roomTitle">Room Title</h3>
                            <p className="roomPrice">Addis hotel</p>
                        </div>
                        <div className="roomInfo">
                             <h3 className="roomTitle">Room Price</h3>
                            <p className="roomPrice">ETB 315</p>
                        </div>
                        <div className="roomInfo">
                             <h3 className="roomTitle">Booked By</h3>
                            <p className="roomPrice">Username</p>
                        </div>
                        <div className="roomInfo">
                             <h3 className="roomTitle">Phone Number</h3>
                            <p className="roomPrice">0911122234</p>
                        </div>
                </div> 
            </div>
            
                <button className="proceedBtn btn container" onClick={handleClick}> 
                    Confirm by SMS     
                </button>
                <button className="cancelBtn btn container">  
                    Cancel Booking        
                </button>
             
        </div>
    </div>
  )
}

export default Reserve;