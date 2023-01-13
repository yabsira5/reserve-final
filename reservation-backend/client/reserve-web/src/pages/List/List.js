import React, { useEffect, useState } from "react";

import { format } from "date-fns";
import { DateRange } from "react-date-range";

import { useLocation } from "react-router-dom";
import axios from "axios";

import "./List.css";
import Navbar from "../../components/navbar/Navbar";
import {  useParams } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/UseFetch";


const List = () => {
  const location = useLocation();
  const [destination] = useState(location.state.destination); //, setDestination
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state.options); //, setOptions
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [data, setdata] = useState([]);
    const params = {
      city:destination,
      cheapestPrice:min,
      price:max}
      useEffect(() => {
        Searchhotel()
      },[])

function Searchhotel ()  {
//   console.log(city);
  
 console.log(destination);


  axios.get(`http://localhost/listhotel/hotel.php?city=${destination}&cheapestPrice=${min}&price=${max}`).then((res)=>{
      console.log(res.data)
      console.log({params})
      console.log(Object.values(res.data))
      setdata(Object.values(res.data));
   })
  // const { data, loading, reFetch } = useFetch(
  //  `/hotel/hotel/`
  // );
  }
  const handleClick = () => {
    // reFetch();
    Searchhotel ()
    console.log(data);
  }

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
             {dates[0].startDate && dates[0].endDate && <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate,"MM/dd/yyyy")} to
                 ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>}
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number"
                  onChange={(e) => setMin(e.target.value)} 
                  className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number"
                  onChange={(e) => setMax(e.target.value)} 
                  className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick()}>Search</button>
          </div>
          <div className="listResult">
          {/* {loading ? (
              "loading, Please Wait"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._HotelCode} />
                ))}
              </>
              
            )} */}
            {data.map((hotel) =>
             <SearchItem hotel={hotel} key={hotel.HotelCode}  />
            )}

                
            {/* <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
