import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateNote() {
    const navigate = useNavigate()
    const token = window.localStorage.getItem('jwt')
   if(!token){
    navigate("/")
   }
    let config = {
        headers: {
            Authenticate:token
        }
    }
  const [detail, setDetails] = useState({title:"",description:""})
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(detail)
    axios.post("https://noteserver-ejfu.onrender.com/createNote",detail,config).then((res)=>{
        console.log(res)
    }).catch((e)=>{
        console.log(e)
    })
  };

  return (
     <div className="createNote">
        <div className="head">
                <div className="icon" onClick={()=>{
                    navigate("/")
                }}>
                    <div className="name"><HomeIcon/></div>
                    HOME
                </div>
                <div className="icon">
                    <div className="name"><AddIcon/></div>
                    ADD NOTE
                </div>
                <div className="icon">
                    <div className="name"><CloseIcon/></div>
                    DELETE ALL
                </div>
            </div>
        <div className="addEntity">
        <Container component="main" sx={{
        m:0,
        p:2,
        pt:4,
        width:'60vw',
        border:1,
        border:'none',
        borderRadius:2,
        backgroundColor:"white",


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
            borderRadius:2,
            backgroundColor:'white'
          }}
        >
          <Typography component="h1" variant="h5" sx={{
             fontSize:20,
          }}>
            Add a Note
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
           
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="email"
              autoFocus
              onChange={(e)=>{setDetails({...detail,title:e.target.value})}}
            />
            <TextField
              multiline
              rows={6}
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="text"
              id="text"
              autoComplete="current-password"
              onChange={(e)=>{setDetails({...detail,description:e.target.value})}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Note
            </Button>
            
          </Box>
        </Box>
      </Container>
        </div>
         
     </div>
      

  );
}