import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Ticketcard from '../../components/admin/ticketcards'
//import { toast } from 'react-toastify'


const Ticketpages = () => {
  const [tickets,setTickets]=useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/bookings/bookinglist`).then((res)=>{
            console.log(res)
            setTickets(res.data)
        }).catch(err=>{
          console.log(err,"error")
          alert(err.res.data.message)
    })
    },[])
  return (
    <div className='grid grid-cols-1  md:grid-cols-3 gap-2'>
        {
          tickets&& tickets.map((ticket, i )=>(
            <Ticketcard key={i} ticket={ticket}/>
          ))
        }
        
    </div>
  )
}

export default Ticketpages