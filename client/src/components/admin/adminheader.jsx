import React from 'react'
//import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//import { persistor } from '../../redux/store'
//import { clearUser } from '../../redux/features/userslice'
//import { toast } from 'react-toastify'
import axios from 'axios'

const Adminheader = () => {
     //const userData=useSelector((state)=>state.user)
    // const dispatch=useDispatch()
     const navigate=useNavigate()
     const username = localStorage.getItem('email'); // Retrieve username from localStorage

  
     const handleLogout=(e)=>{
      try {
        e.preventDefault();
   axios.post(`${import.meta.env.VITE_BASE_URL}/admin/logout`).then((res)=>{
      console.log(res)
     // persistor.purge()
      //toast.success('logout succeful')
      //dispatch (clearUser())
      navigate('/')
      
   })
   } catch (error) {
        console.log(error)
        
      }
    
     }

    return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li onClick={()=> navigate("/admin")}><a>home</a></li>
      
      <li onClick={()=> navigate("/ticket")}><a>Bookings</a>
      </li>
    <li onClick={()=> navigate("/adminevents")}><a>Manage Events</a></li>
    <li onClick={()=> navigate("/create")}><a>create event</a></li>
     
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">{username}</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li onClick={()=> navigate("/admin")}><a>home</a></li>
      
        <li onClick={()=> navigate("/ticket")}><a>Bookings</a>
        </li>
      <li onClick={()=> navigate("/adminevents")}><a>Manage events</a></li>
      <li onClick={()=> navigate("/users")}><a>users</a></li>
      <li onClick={()=> navigate("/create")}><a>create event</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
  <button className='btn'onClick={handleLogout}>Logout</button>
  
  </div>
</div>
  )
}

export default Adminheader