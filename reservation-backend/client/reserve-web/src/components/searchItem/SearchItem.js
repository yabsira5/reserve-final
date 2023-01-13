import React from "react";
import "./searchItem.css";
import { Link}from "react-router-dom";
import Hotel from "../../pages/Hotel/Hotel";

// import Hotel from "../../pages/Hotel/Hotel";

const SearchItem = ({hotel}) => {
  console.log(hotel)

  return (
    <div className="searchItem">
     
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      
      <div className="siDesc">
        <h1 className="siTitle" >{hotel.name}</h1> 
        <span className="siDistance">{hotel.distance}</span>
        <span className="siTaxiOp">{hotel.city}</span>
        <span className="siSubtitle">
        {hotel.title}
        </span>
        <span className="siFeatures">
        {hotel.featured}
        </span>
      </div>
      <div className="siDetails">{hotel.disc}
        <div className="siRating">
          <button>{hotel.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">ETB {hotel.price}</span>
          <span className="siTaxOp">ETB {hotel.cheapestPrice}</span>

          <Link to= {`/hotels/${hotel.HotelCode}`}>                
            <button className="siCheckButton">See availability</button>
          </Link>
          {/* to={`hotels/${item.HotelCode}/list`} */}
        </div>
      </div>
      </div>
      
  );
};

export default SearchItem;
