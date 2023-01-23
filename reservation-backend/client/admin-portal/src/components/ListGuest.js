import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import NavBar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import  {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../pages/list/list.css'
import './tableDesign.css';

export default function ListGuest(){
  
  const [users, setUsers] = useState([]);
  useEffect (() => { 
    getUsers();
}, 
[]);
  
  function getUsers(){
    axios.get('http://localhost/User/user/').then(function ($response){
      console.log($response.data);
      setUsers($response.data);  
    });
}

const deleteUser = (UserID) => {
  axios.delete(`http://localhost/User/user/${UserID}/delete`).then(function(response){
    console.log(response.data);
    getUsers();
     toast.error(' (っ °Д °;)っ (┬┬﹏┬┬) User Deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  })
}  

  return(
   <div>
    <div className="list">
      <Sidebar />
      
      <div className="listContainer">
        <NavBar />
      
      <div className="datatableTitle">
        <h1>List User</h1>
      </div>

        <div className="tableRoom">
        <table className="styled-table">
            <thead>
            <tr>
              <th>User_ID</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Country</th>
              <th>City</th>
              <th>Phone</th>
             
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
             
               
               <td>
                 <Link to={`user/${user.UserID}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                <button className="btn btn-denger" onClick={() => deleteUser(user.UserID)}>Delete</button>
                <ToastContainer />
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