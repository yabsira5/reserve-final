import React from "react";
import "./searchItem.css";
import { Link }from "react-router-dom";

// import Hotel from "../../pages/Hotel/Hotel";

const SearchItem = ({hotel}) => {
  console.log(hotel)

  const img = hotel.photo?.split(',') || [];

  return (
    <div className="searchItem">
     
      <img
        src={`http://localhost/fileupload/hotel/images/${img[0]}`}
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
          {hotel.disc}
        </span>
        <span className="siFeatures">
        {hotel.featured}
        </span>
      </div>
      <div className="siDetails">
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
