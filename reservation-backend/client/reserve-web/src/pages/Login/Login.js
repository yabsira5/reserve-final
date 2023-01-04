import React,{useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
  
  const theme = createTheme();

const Login = () => {

  let navigate = useNavigate();

  const [user,setuser]=useState({Email:'',Password:''})

  const handleChange=(e)=>{
    setuser({ ...user,[e.target.name]: e.target.value});
  }

  const submitForm=(e)=>{
    e.preventDefault();
   const sendData = {
    Email:user.Email,
    Password:user.Password
    }
  
  
  console.log(sendData)
  
  axios.post('http://localhost/api2/login_clinet.php',sendData)
  
  .then((result)=>{
    if(result.status === 200){
      window.localStorage.setItem('auth', result.data);
    navigate('/');}
    else{
      alert('Invalid User');
      console.log(result.data)
    }
  })
  
  }

  //  const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email Address"
              name="Email"
              autoComplete="current-Email"
              autoFocus
              error={user.Email.length === 0}
              helperText={!user.Email.length ? 'Email is required' : ''}
              onChange={handleChange} value={user.Email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="password"
              id="Password"
              autoComplete="current-password"
              error={user.Password.length === 0}
              helperText={!user.Password.length ? 'Password is required' : ''}
              onChange={handleChange} value={user.Password}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="./SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
