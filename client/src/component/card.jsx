import { Box, width } from "@mui/system";
import React from "react";
import NoteIcon from '@mui/icons-material/Note';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
const Card = (props) =>{
    const token = window.localStorage.getItem('jwt')
    let config = {
        headers: {
            Authenticate:token
        }
    }

    const handleDelete=()=>{
         axios.delete(`https://noteserver-ejfu.onrender.com/deleteNote/${props.data._id}`,config).then((res)=>{
            console.log(res) 
            props.setfresh(!props.refresh)
         })
    }
    return(
        <>
        <Box sx={{
            p:1.5,
            border:1,
            width:"60vw",
            borderRadius:2,
            boxShadow:2,
            m:1
        }}><AccessTimeIcon  sx={{
            mr:2,
            fontSize:20
        }}/>
{props.data.date}
         <Box sx={{
            mt:2,
            fontSize:20,
            fontWeight:600,
         }}>
            <NoteIcon sx={{
                mr:2,
            }}/>
            {props.data.title}
            <Box sx={{
                mt:1,
                fontSize:18,
                fontWeight:500,
            }}>
                {props.data.description}
            </Box>
            <Box sx={{
                display:"flex",
                justifyContent:"flex-end"
            }}>
                <span onClick={handleDelete}><DeleteIcon/></span> 
            </Box>
             
         </Box>
        </Box>
        </>
    )
}

export default Card