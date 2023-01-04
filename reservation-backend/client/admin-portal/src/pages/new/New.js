import React, { useState} from 'react'
import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


//import { useNavigate } from 'react-router-dom';
const New = () => {
//   const [file, setFile] = useState("");

   // const navigate = useNavigate();
      const [data, setdata]=useState({})

    const handleChange=(e)=>{
       
      const name  = e.target.name;
      const value  = e.target.value;
     
      setdata(values => ({...values,[name]: value}));
   }
    
    const submitForm=(e)=>{
      e.preventDefault();
  
      console.log(data);
  
      axios.post('http://localhost/Admin/user/save',data)
    
      .then((result)=>{
        if(result.Status === 201 && result.post ) {
        alert('Invalid User');
        }
        else {
          alert("User added!");
        }
      })
   
  }
    
    /*
    */    
    
    

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add here</h1>
        </div>
        <div className="bottom">
             <Box
                sx={{
                  marginTop: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
        >
        
          <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>

          <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                id="Username"
                label="Username"
                name='Username'
                type={'text'}
                onChange={handleChange} 
                autoFocus
              />
              </Grid>

            
            
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                id="Email"
                label="Email"
                name="Email"
                type="text"
                onChange={handleChange} 
                autoComplete="current-Email"
              />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                 autoComplete="Country"
                  required
                  fullWidth
                  id="Country"
                  label="Country"
                  name="Country"
                  type="text"
                  onChange={handleChange} 
                />
              </Grid>
                            

              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                 autoComplete="City"
                  required
                  fullWidth
                  id="City"
                  label="City"
                  name="City"
                  type="text"
                  onChange={handleChange} 
                />
              </Grid>

              
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                 autoComplete="Phone"
                  required
                  fullWidth
                  id="Phone"
                  label="Phone"
                  name="Phone"
                  type="number"
                  onChange={handleChange} 
                  />
              </Grid>
              
                

              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Password"
                  type="text"
                  onChange={handleChange} 
                  label="Password"
                  id="Password"
                />
              </Grid>

              

            {/* Sign In Button*/}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            </Grid>
          </Box>
          </Box>

          </div>              
        </div>
      </div>
    )
}

export default New