import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admindashboard = () => {
    const navigate=useNavigate()
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://eventthood.com/wp-content/uploads/2023/07/eventshub_evergreen_opengraph_1200x630_2x.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome Admin</h1>
      <p className="mb-5">
      We organize & build
      creative digital events
      with attention to details

      </p>
      <button className="btn btn-primary" onClick={()=>navigate("/adminevents")}>EVENTS</button>
    </div>
  </div>
</div>
  )
}

export default Admindashboard