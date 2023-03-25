import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate()
  const [detail, setDetails] = useState({name:"", email:"",password:"", cpassword:""})
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(detail)
    if(detail.password != detail.cpassword){
      window.alert("Password Mismatch")
      return
    }

    axios.post("https://noteserver-ejfu.onrender.com/userregister", {
      name:detail.name,
      email:detail.email,
      password:detail.password
    }).then((res)=>{
      if(res.status == 200){
        navigate("/signin")
      }
    }).catch((e)=>{
      navigate("/")
      window.alert("Email Already Exist")
      console.log(e.message);
    })

  };

  return (
     <div className="mainpage">
      <Container component="main" sx={{
        m:0,
        p:2,
        pt:4,
        width:'30vw',
        border:1,
        border:'none',
        borderRadius:2,
        
      }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            m:0,
            mb:1,
            border:2,
            p:5,
            borderRadius:2
          }}
        >
          <Typography component="h1" variant="h5" sx={{
             fontSize:20,
          }}>
            Create a New Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              onChange={(e)=>{setDetails({...detail,name:e.target.value})}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>{setDetails({...detail,email:e.target.value})}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{setDetails({...detail,password:e.target.value})}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="Confirm Password"
              type="password"
              id="cpassword"
              onChange={(e)=>{setDetails({...detail,cpassword:e.target.value})}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                </Link>
              </Grid>
              <Grid item>
                <span onClick={()=>{
                     navigate("/signin")
                }} variant="body2">
                  {"Already have an account"}
                </span>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
     </div>
      

  );
}