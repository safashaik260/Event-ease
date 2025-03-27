import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../../components/user/cards'
import Admineventards from '../../components/admin/admineventcard'
//import { toast } from 'react-toastify'


const Adminevents = () => {
  const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/event/listevents`).then((res)=>{
            console.log(res)
            setEvents(res.data)
        }).catch(err=>{
          console.log(err,"error")
          alert(err.res.data.message)
    })
    },[])
  return (
    <div className='grid grid-cols-1  md:grid-cols-3 gap-2'>
        {
          events&& events.map((event, i )=>(
            <Admineventards key={i} event={event}/>
          ))
        }
        
    </div>
  )
}

export default Adminevents
