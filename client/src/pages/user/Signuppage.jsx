import axios from 'axios'
import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function Signuppage() {
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:'',
    password:'',
    confirmpassword:''

  })
  const navigate=useNavigate()
  const onSubmit=(e)=>{
    e.preventDefault();
   axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,values).then((res)=>{
      console.log(res)
      toast.success('signup succeful')
      navigate('/login')
      

    }).catch(err=>{console.log(err)
      toast.error(err.response.data.error)
    })
    console.log(values,"values")
  }
    
  return (
    <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
  
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
        <label className="fieldset-label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' required onChange={(e)=>{
            setValues({...values,[e.target.name]:e.target.value})
          }} />
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email"name='email' required onChange={(e)=>{
            setValues({...values,[e.target.name]:e.target.value})
          }}
           />
         
          <label className="fieldset-label">Phone number</label>
          <input type="tel" className="input" placeholder="Phone" name='phone' required onChange={(e)=>{
            setValues({...values,[e.target.name]:e.target.value})
          }}/>
        <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' required onChange={(e)=>{
            setValues({...values,[e.target.name]:e.target.value})
          }} />
          <label className="fieldset-label">Confirm password</label>
          <input type="password" className="input" placeholder="password" name='confirmpassword' required onChange={(e)=>{
            setValues({...values,[e.target.name]:e.target.value})
          }}/>
         
        
          <button className="btn btn-neutral mt-4" onClick={onSubmit}>Sign up</button>
          <div className='text-center'>
        Already have an account?<Link to={'/login'} className='text-blue underline'>Login</Link>
        </div>

        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default Signuppage