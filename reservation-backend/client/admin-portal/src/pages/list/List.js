import React from 'react'
import "./list.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
//import Datatable from "../../components/datatable/Datatable"
import GuestList from "../../components/GuestList/GuestList"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/*<Datatable/>*/}
        <GuestList />
      </div>
    </div>
  )
}

export default List