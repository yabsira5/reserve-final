import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import Featured from "../../components/featured/Featured";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="bookings" />
          <Widget type="rooms" />
          <Widget type="receptionists" />
        </div>
  
        <div className="charts">

          {/*<Featured />*/}
        </div>
        <div className="listContainer">
          <div className="listTitle">Customer Booking Details</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home