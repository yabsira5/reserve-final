import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import NavBar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

import '../pages/list/list.css'

export default function ListGuest(){
  
  const [users, setUsers] = useState([]);
  useEffect (() => { 
    getUsers();
}, 
[]);
  
  function getUsers(){
    axios.get('http://localhost/Hotel/hotel/').then(function ($response){
      console.log($response.data);
      setUsers($response.data);  
    });
}
    
  return(
   <div>
    <div className="list">
      <Sidebar />
      
      <div className="listContainer">
        <NavBar />

    <div className="datatableTitle">
        <h1>List Room</h1>
        <Link to="/hotels/new" className="link">
          Add New
        </Link>
      </div>

      <div className="tableRoom">
        <table>
            <thead>
            <tr>
              <th>HotelCode</th>
              <th>name</th>
              <th>type</th>
              <th>City</th>
              <th>Country</th>
              <th>address</th>
              <th>distance</th>
              <th>Actions</th>
            </tr>
           </thead>

        <tbody>
        {users.map((user, key) =>
           <tr key={key}>
               <td>{user.UserID}</td>
               <td>{user.Username}</td>
               <td>{user.Email}</td>
               <td>{user.Country}</td>
               <td>{user.City}</td>
               <td>{user.Phone}</td>
               <td>{user.Password}</td>
               
               <td>
                 <Link to={`user/${user.UserID}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                <button className="btn btn-denger">Delete</button>
               </td>
                       
           </tr>
        )}  
        </tbody> 
        </table> 
    
        </div>
        </div>
        </div>
  
    </div>
  )

  // axios.get()
    // .then(($response) => {
    //   console.log($response)
    //   setUsers($response.data)
    // })
    // .catch(($err) => {
    //   console.log($err)
    // });
  
}