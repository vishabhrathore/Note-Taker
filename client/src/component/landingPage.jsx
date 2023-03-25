import React, { useEffect, useState } from "react";
import "../component/style.css"
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Card from "./card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LandingPage = ()=>{
const navigate = useNavigate()
   const token = window.localStorage.getItem('jwt')
   if(!token){
    navigate("/")
   }
   const [noteData, setData] = useState([])
   const [refresh, setfresh] = useState(true)
   useEffect(()=>{
    let config = {
        headers: {
            Authenticate:token
        }
    }
    axios.get("https://noteserver-ejfu.onrender.com/findNotes", config).then((res)=>{
        console.log(res.data.data)
        setData(res.data.data)
    }).catch((e)=>{
        console.log(e)
    })

   },[refresh])

   const handlesearch =(val)=>{
    if(!val){
        setfresh(!refresh)
    }
    
       const data = noteData.filter(notes=>
        notes.title.toLowerCase().includes(val.toLowerCase())
       )
    //    console.log(data)
 
        setData(data)

   }

    return(
        <>
        <div className="main">
            <div className="head">
                <div className="icon">
                    <div className="name"><HomeIcon/></div>
                    HOME
                </div>
                <div className="icon" onClick={()=>{
                    navigate("/createnote")
                }}>
                    <div className="name"><AddIcon/></div>
                    ADD NOTE
                </div>
                <div className="icon">
                    <div className="name"><CloseIcon/></div>
                    DELETE ALL
                </div>
            </div>
            <div className="search">
                <SearchIcon/>
                <input type="text" onChange={(e)=>{
                    handlesearch(e.target.value)
                }}/>

            </div>
            <div className="data">

                {
                    noteData.map((data, index)=>{
                        return <Card data={data} setfresh={setfresh} refresh={refresh}/>
                    })
                }
            </div>
        </div>

        </>
    )
}
export default LandingPage