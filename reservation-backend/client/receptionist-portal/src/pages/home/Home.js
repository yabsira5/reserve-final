import React,{useEffect} from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import Featured from "../../components/featured/Featured";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import { useNavigate } from 'react-router-dom';
import "./home.css";

const Home = () => {

  let navigate = useNavigate();

  useEffect(()=>{
    var auth = localStorage.getItem('authemp');
    if(auth===null){
  navigate('/Login');
    }
  })

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="bookings" />
          <Widget type="rooms" />
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