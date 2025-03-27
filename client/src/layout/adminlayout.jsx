import React from 'react'
import Adminheader from '../components/admin/adminheader'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/footer'

const Adminlayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Adminheader/>
        <div className='flex-grow p-3'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Adminlayout