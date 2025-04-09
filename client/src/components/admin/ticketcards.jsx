import axios from 'axios'
import React from 'react'
//import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//import { eventDetails } from '../../../../server/controllers/eventcontroller'
//import { eventDetails } from '../../../../server/controllers/eventcontroller'

const Ticketcard = ({ticket}) => {
  
  const navigate=useNavigate()
const deleteEvent=(ticketId)=>{
    try {
        axios.delete(`${import.meta.env.VITE_BASE_URL}/bookings/delete/${ticketId}`).then((res)=>{
            console.log(res)
            alert('ticket deleted succefully')
           navigate("/admin") 

        }).catch((err)=>{
            console.log(err)
        })
        alert('ticket deleted succefully')
        navigate("/admin")

    } catch (error) {
        console.log(error)
        alert(error)
        
    }

}
  
  return (
    <div className="card w-96 bg-base-100 shadow-sm">
    <div className="card-body">
      <span className="badge badge-xs badge-warning">{ticket.tickettype}</span>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">{ticket.eventname}</h2>
        <span className="text-xl"></span>
      </div>
      <ul className="mt-6 flex flex-col gap-2 text-xs">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Ticket price:{ticket.ticketprice}</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Is paid:Paid</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>User name:{ticket.username}</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Pyment Id:{ticket.sessionid}</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Booked at:{ticket.createdAt}</span>
        </li>

         {/*<li className="opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span className="line-through">{ticket.createdAt}</span>
        </li>
        <li className="opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span className="line-through">Real-time collaboration tools</span>
        </li> */}
      </ul>
      <div className="mt-6">
        <button className="btn btn-primary btn-block" onClick={()=>deleteEvent(ticket._id)}>Delete</button>
      </div>
    </div>
  </div>
  )
}

export default Ticketcard