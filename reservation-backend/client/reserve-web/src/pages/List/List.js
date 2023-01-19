import React, { useEffect, useState } from "react";

import { format } from "date-fns";
import { DateRange } from "react-date-range";

import { useLocation } from "react-router-dom";
import axios from "axios";

import "./List.css";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";


const List = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination); //, setDestination
  const [dates, setDates] = useState(location.state.dates || '');
  const [openDate, setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options); //, setOptions
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type] = useState(location.state.parma);
    const params = {
      city:destination,
      cheapestPrice:min,
      price:max}
      useEffect(() => {
        Searchhotel()
        setLoading(false);
        if(type){
          searchtype()
          setLoading(false);
        }
      },[])
console.log(type);
function Searchhotel ()  {

   console.log(destination);
   axios.get(`http://localhost/listhotel/hotel.php?city=${destination}&cheapestPrice=${min}&price=${max}`).then((res)=>{
      console.log(res.data)
      console.log({params})
      setdata(res.data);
   })
  }
 function searchtype () {

  axios.get(`http://localhost/typehotel/hotel.php?type=${type}&cheapestPrice=${min}&price=${max}`).then((res)=>{
      console.log(res.data)
      setdata(res.data);

 })}

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" onChange={(e) => setDestination(e.target.value)} />
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
                    onChange={(e)=> setOptions(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                    onChange={(e)=> setOptions(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                    onChange={(e)=> setOptions(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button onClick={Searchhotel()}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading, Please wait"
            ):(
              <>
            {data.map((hotel,key) => (
            <div key={key}>
             <SearchItem hotel={hotel} key={hotel.HotelCode}  />
             </div>
             
            ))}
            </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
