import React from 'react'
import Header from '../components/user/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/footer'

const Userlayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        <div className='flex-grow p-3'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Userlayout