import React,{useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom';

const BookingInfo = () => {

  let navigate = useNavigate();

  useEffect(()=>{
    var auth = localStorage.getItem('auth');
    if(auth===null){
  navigate('/login');
}
  })

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Booking Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            variant="standard"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone_No"
            name="Phone_Number"
            label="Phone Number"
            fullWidth
            autoComplete="phone"
            variant="standard"
          />
        </Grid>
      
      </Grid>
    </React.Fragment>
  )
}

export default BookingInfo;