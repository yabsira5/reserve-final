import React, { useContext,useState,useEffect } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";

import { SearchContext } from "../../context/SearchContext";

import Navbar from "../../components/navbar/Navbar";
import MapPage from "../../components/map/MapPage";

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"
import PlaceIcon from "@mui/icons-material/Place";
import Reserve from "../../components/reserve/Reserve";

import "./Hotel.css";
import axios from "axios";
import { imageListClasses } from "@mui/material";

const Hotel = () => {
  //All States
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [date, setdates] = useState([]);
  const [option, setoptions] = useState({});
  const [type,setType] = useState([]);
  // const [openModal, setOpenModal] = useState(false);


   // Use Location for get The Hotel ID
   const location = useLocation();
   const HotelCode = location.pathname.split("/")[2];
   console.log(HotelCode);
     // Context (Use Context)
  const { dates, options } = useContext(SearchContext);
  
   useEffect(() =>{

    //gets Hotel Details
    axios.get(`http://localhost/Hotel/hotel/${HotelCode}`).then(function($response){
      setData($response.data)
    })

 
    
    //gets Room Details
    axios.get(`http://localhost/Roomtype/room/${HotelCode}`).then(function($response){
      setType($response.data)
    })


  
  setdates(dates);
  setoptions(options);

   

   },[])

   const RoomNo = type.RoomNo;

  

  const navigate = useNavigate();

   // get actual date function
   const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
   function dayDifference(date1, date2) {
     const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
     const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
     return diffDays;
   }
 
   // get days using actual date define function
   const days = dayDifference(date[0]?.endDate, date[0]?.startDate);


  console.log(data.photo)

  const dis = data.distance?.split(',') || [];

  const long = dis[1];
   const lati = dis[2];
   console.log(long);
   console.log(lati);
 

  const img = data.photo?.split(',') || [];
 console.log(img);
 const ph = img.length;
console.log(ph)

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? ph-1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === ph-1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  // const handleClick = () => {

  //    {<Reserve  HotelCode={HotelCode} RoomNo ={type.RoomNo}  />}
     
  //      navigate(`/reserve/${type.RoomNo}`);
    
  // };
  
  
  return (
    <div>
      <Navbar/>
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <CloseIcon
              className="close"
              onClick={() => setOpen(false)}
            />
            <ArrowBackIcon
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={`http://localhost/fileupload/hotel/images/${img[slideNumber]}`} alt="" className="sliderImg" />
            </div>
            <ArrowForwardIcon
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <PlaceIcon />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {dis[0]} from {data.address}
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ETB {data.price} at this property and get a {data.featured}
          </span>
          <div className="hotelImages">
            {img.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={`http://localhost/fileupload/hotel/images/${photo}`}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.disc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of {data.city}, this property has an
                excellent location score of {data.rating}!
              </span>
              <h2>
                <b>ETB{days * data.cheapestPrice * option.room}</b> ({days}{" "}
                nights)
              </h2>
            </div>
          </div>
          <div className="maps">
            <MapPage long={long} lati={lati}/>
          </div>
        </div>

        {/* Room Categories*/}

        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Room Types</h2> 
            <div className="roomTypes">
             
              {type.map((room)=>(
                // { (() =>{
                //   if(check.RoomNo != room.RoomNo) {
            <div className="projcard-container" key={room.title}>
              <div className="projcard projcard-blue">
                <div className="projcard-innerbox">
                  <img className="projcard-img" alt="project" src={`http://localhost/fileupload/room/images/${room.img}`} />
                  <div className="projcard-textbox">
                    <div className="projcard-title">Room Type - {room.title}</div>
                    <div className="projcard-subtitle">Our {room.title} has:</div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">
                     {room.disc}
                    </div>
                      <Link to = {`/reserve/${room.RoomNo}`}>
                      <button className="bookNow">Reserve Your Room
                      </button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
            //   }
            // }) ()}

              ))}
              </div>
          

            
        </div>
       
      </div>
  );
};

export default Hotel;
