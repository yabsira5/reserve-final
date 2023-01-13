import React,{useState,useEffect} from 'react';
import './Profile.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";

export default function Profile(){

  let {UserID} = useParams();

  // const [user,setUsers] = useState([]);
  const [profiles, setProfile] = useState([]);

  useEffect (() => {
    
    UserID = JSON.parse(localStorage.getItem('auth'));
    if(UserID){
        // setUsers(UserID);
        
        console.log(UserID)
        getUser()
    };
}, 
[]);
  
  function getUser() {
    console.log('UserID: '+UserID)
    axios.get(`http://localhost/User/user/${UserID}`)
    .then(function ($response){
      console.log($response.data);
      setProfile($response.data);
      console.log(profiles)
    })
    .catch(err=>console.log(err))
     
    
}


  return (
    <div className="main">
        <h2>Profile </h2>
        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <div>
                  {profiles.map((profile,key)=>(
                    <div key={key}>
                      <h2>{profile.Username}</h2>
                      <p>Email:{profile.Email}</p>
                      <p>Country:{profile.Country}</p>
                      <p>City:{profile.City}</p>
                      <p>Phone:{profile.Phone}</p>
                      <Link to={`profile/${profile.UserID}/edit`} style={{marginRight: "10px"}}>Edit Info</Link>
                    </div>
                  ))}</div>
            </div>
        </div>
  </div>
  );
}

