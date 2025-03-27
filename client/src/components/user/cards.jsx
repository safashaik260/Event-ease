//import axios from 'axios'
//import axios from 'axios'
import React from 'react'

import { Navigate, useNavigate } from 'react-router-dom'


const Cards = ({event}) => {
const navigate=useNavigate()


  
  return (
    <div className="card card-side bg-base-100 shadow-sm grid-grid-cols-1">
  <figure className='w-full h-full'>
    <img
      src={event.image}
      alt="Movie" className='object-cover-w-full h-full' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{event.title}</h2>
    <p>{event.description}</p>
    

    <div className="card-actions justify-end">
   
      <button className="btn btn-primary" onClick={()=>navigate(`/details/${event._id}`,)}>view</button>
    
    </div>
  </div>
</div>
  )
}

export default Cards