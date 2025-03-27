import React, { useEffect, useState } from 'react'
import Eventcard from '../../components/user/eventcard'
import axios from 'axios'
//import { router } from '../../routes/router'

import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Eventdetailspage = () => {
    const {eventId}=useParams()
    const [event,setEvent]=useState([])
    const userData=useSelector((state)=>state.user)
  const navigate=useNavigate()
    useEffect(()=>{
      
        axios.get(`${import.meta.env.VITE_BASE_URL}/event/eventdetails/${eventId}`).then((res)=>{
            
           console.log(res)
            setEvent(res.data)
        }).catch(err=>{
          console.log(err)
          
    })
    },[eventId])
  return (
    userData.user && Object.keys(userData.user).length > 0 ?
    <div>
        {event ? (
            <Eventcard event={event}/>
        ):(
        <p>loading</p>
            )}
            </div>
      
       :<a className="btn center"  onClick={()=>navigate("/login")}>pls login to view Details</a>
 
 
  )}


export default Eventdetailspage