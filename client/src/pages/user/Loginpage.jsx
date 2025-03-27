import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { saveUser } from '../../redux/features/userslice'

const Loginpage = () => {
  const [values,setValues]=useState({
      email:'',
      password:''
  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  const onSubmit=(e)=>{
    e.preventDefault();
    //if(values.email=="admi@gmail" && values.password=="Admin@123")
    
   axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`,values).then((res)=>{
      console.log(res)
    
      toast.success('login succeful')
      dispatch (saveUser(res.data.userExist))
      localStorage.setItem('usertoken',res.data.token );
      
      
     navigate('/events')
   
   
    
   
    }).catch(err=>{console.log(err)
      toast.error(err.response.data.error)
    })
    console.log(values,"values")
  }
  return (
    <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
  
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email"  name='email' required onChange={(e)=>{
            setValues({...values,[e.target.name]:e.target.value})
          }} />
          <label className="fieldset-label" >Password</label>
          <input type="password" className="input" placeholder="Password" name='password' required onChange={(e)=>{
            setValues({...values,[e.target.name]:e.target.value})
          }}/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4" onClick={onSubmit}>Login</button>
          <div className='text-center'>
        Dont have an account?<Link to={'/signup'} className='text-blue underline'>signup</Link>
        </div>
      
        </fieldset>
       </div>
    </div>
  </div>
</div>
  )
}

export default Loginpage