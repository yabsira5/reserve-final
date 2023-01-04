import React,{useState,useEffect} from 'react';
import './Profile.css';
import axios from "axios";
import Button from "@mui/material/Button"
import {useParams} from "react-router-dom";

export default function Profile(){

  let {UserID} = useParams();

  const [users, setUsers] = useState([]);

   

  useEffect (() => { 
    UserID = JSON.parse(localStorage.getItem('auth'));
    if(UserID){
        setUsers(UserID);
        
        console.log(UserID)
    };
    getUser();
    console.log(users);
}, 
[]);
  
  function getUser() {
    console.log('UserID: '+UserID)
    axios.get(`http://localhost/User/user/${UserID}`)
    .then((res)=>{
      setUsers(res)
      console.log(res.data);
    })
    .catch(err=>console.log(err))
     
    
}


  return (
    <div className="main">
        <h2>Profile </h2>
        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <div className='profiles' >
                  {users.map((profile,key)=>(
                    <div key={key}>
                      <h2>{profile.Username}</h2>
                      <p>Email:{profile.Email}</p>
                      <p>Country:{profile.Country}</p>
                      <p>City:{profile.City}</p>
                      <p>Phone:{profile.Phone}</p>
                    </div>
                  ))}</div>
              <Button 
                variant="contained"
                sx={{ mt: 3, mb: 3, mr: 2, ml: 2 }}
              >Edit Info
              </Button>
            </div>
        </div>
  </div>
  );
}

