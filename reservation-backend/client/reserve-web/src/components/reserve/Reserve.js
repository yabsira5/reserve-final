import React from 'react'
import './Reserve.css';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Reserve = ({setOpen}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(true) {
         navigate("/checkout");
       }
     };
  return (
    <div>
        <div className="reserve">
            <div className="rContainer">
                <CloseIcon 
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span>Select your rooms:</span>
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="rTitle">Our Rooms</div>
                        <div className="rDesc">Description</div>
                        <div className="rMax">
                        Max people: <b>2</b>
                        </div>
                        <div className="rPrice">ETB 130</div>
                    </div>
                    <div className="rSelectRooms">
                        <div className="room">
                            <label>Room Number:</label>
                                <input
                                    type="checkbox"
                                />
                        </div>
                    </div>
                </div>
                <button onClick={handleClick} className="rButton">
                    Reserve Now!
                </button>
            </div>
        </div>
    </div>
  )
}

export default Reserve;