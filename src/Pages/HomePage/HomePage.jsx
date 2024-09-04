import React from 'react'
import "./homepage.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'  

const HomePage = () => {
    
  return (
    <div className=' home-container'>
        
        <div className=''>
            <Navbar />   {/*  Navbar Component */}
        </div>
        <div className='mt-14 componenets-card'>
            <Outlet />   {/* To allow the nested routing elements of HomePage to display*/}
        </div>
        <div className=''>
          <Footer />
        </div>
        
    </div>
  )
}

export default HomePage