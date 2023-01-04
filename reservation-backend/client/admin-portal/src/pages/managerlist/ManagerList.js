import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import NavBar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import '../../pages/list/list.css'
import '../../components/tableDesign.css'

export default function ListEmp(){
  
  const [emps, setEmps] = useState([]);
  useEffect (() => { 
    getEmp();
}, 
[]);
  
  function getEmp(){
    axios.get('http://localhost/Emp/employee/').then(function ($response){
      console.log($response.data);
      setEmps($response.data);  
    });
}

const deleteEmp = (EmployeeID) => {
  axios.delete(`http://localhost/Emp/employee/${EmployeeID}/delete`).then(function(response){
    console.log(response.data);
    getEmp();
  })
}  
    
  return(
   <div>
    <div className="list">
      <Sidebar />
      
      <div className="listContainer">
        <NavBar />

    <div className="datatableTitle">
        <h1>List Managers</h1>
        <Link to="/managers/newmanager" className="link">
          Add New
        </Link>
      </div>

      <div className="tableRoom">
        <table>
            <thead>
            <tr>
              <th>EmployeeID</th>
              <th>HotelCode</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
           </thead>

        <tbody>
        {emps.map((emp, key) =>
           <tr key={key}>
               <td>{emp.EmployeeID}</td>
               <td>{emp.HotelCode}</td>
               <td>{emp.FirstName}</td>
               <td>{emp.LastName}</td>
               <td>{emp.Email}</td>
               <td>{emp.Password}</td>
               
               <td>
                 <Link to={`emp/${emp.EmployeeID}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                <button className="btn btn-denger" onClick={() => deleteEmp(emp.EmployeeID)}>Delete</button>
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