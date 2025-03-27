import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserBookingCard from '../../components/user/userBookingcard'
//import { useParams } from 'react-router-dom'

const UserBookingspage = () => {
    const userData=useSelector((state)=>state.user)
    //const {userId}=useParams()

     const [tickets,setTickets]=useState([])
        useEffect(()=>{
            axios.get(`${import.meta.env.VITE_BASE_URL}/bookings/mybookings/${userData.user._id}`).then((res)=>{
                console.log(res)
                setTickets(res.data)
            }).catch(err=>{
              console.log(err,"error")
              alert(err.res.data.message)
        })
        },[userData.user._id])
     
  return (
    <div className='grid grid-cols-1  md:grid-cols-3 gap-2'>
    {tickets.length === 0 ? (
        <p>You haven't booked any events yet.</p>
      ) : (
      tickets&& tickets.map((ticket, i )=>(
        <UserBookingCard key={i} ticket={ticket}/>
      ))
   ) }
    
</div>
  )
}

export default UserBookingspage