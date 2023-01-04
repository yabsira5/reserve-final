import React,{useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
 
const SignUp = () => {

  const navigate = useNavigate();
  const [data, setdata]=useState({
  Username:"",
  Email:"",
  Country:"",
  City:"",
  Phone:"",
  Password:""
})

const handleChange=(e)=>{
  setdata({ ...data,[e.target.name]: e.target.value});
}

const submitForm=(e)=>{
  e.preventDefault();

 const sendData = {
  Username:data.Username,
  Email:data.Email,
  Country:data.Country,
  City:data.City,
  Phone:data.Phone,
  Password:data.Password
  }


console.log(sendData)

axios.post('http://localhost/User/user/save',sendData)

.then((result)=>{
  if(result.status === 200) {
    navigate('/login');
  }
  else {
    alert('Invalid User');
  }
})

}

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //       email: data.get('email'),
    //       password: data.get('password'),
    //     });
    //   };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={submitForm} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="Username"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  autoFocus
                  onChange={handleChange} value={data.Username}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Country"
                  label="Country"
                  name="Country"
                  autoComplete="Country-name"
                  onChange={handleChange} value={data.Country}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="City-name"
                  name="City"
                  required
                  fullWidth
                  id="City"
                  label="City"
                  autoFocus
                  onChange={handleChange} value={data.City}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email Address"
                  name="Email"
                  autoComplete="Email"
                  onChange={handleChange} value={data.Email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Phone"
                  label="Phone Number"
                  name="Phone"
                  autoComplete="Phone"
                  type="text"
                  onChange={handleChange} value={data.Phone}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="Password"
                  autoComplete="new-password"
                  onChange={handleChange} value={data.Password}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    );
};

export default SignUp;