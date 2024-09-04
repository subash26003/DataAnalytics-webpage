import { useState } from "react"
import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {
    const [hamburgerClicked , setHamburgerClicked] = useState(false)  // Hamburger Icon state to display and hide
    const [mobileProductClicked,setMobileProductClicked] = useState(false)
    const mobileNavbarClass  = hamburgerClicked ? "iniline-block" : "hidden"
    const mobileDropDownClass = mobileProductClicked ? "block" : "hidden"
      // Mobile nav container card State
    
  return (
    <div className="fixed top-0 z-40"> {/* Outer container*/}
         <div className='navbar-conatainer h-14 shadow-lg bg-white w-screen flex justify-end items-center border-b '> 
            <nav className='pc-navbar h-full hidden md:flex justify-end items-center gap-4 text-lg  pr-5'> {/* Navbar for Large device*/}
                <div className="  text-center ">
                    <Link to="/"><li className='navbar-links text-base font-semibold'>Home</li></Link>  {/* Apropriate links to the pages*/}
                </div>
                <div className="dropdown flex justify-center ">
                    <li className="navbar-links ml-2 text-base font-semibold flex">Products 
                        <span className="mt-1"> <IoMdArrowDropdown /> </span>
                    </li>
                   
                    <div className="dropdown-content p-2 rounded-md">
                        <Link to="/upload"><li className="text-base font-semibold">Upload</li> </Link>
                        <Link to="/analyse"><li className="text-base font-semibold">Analyse</li></Link>
                    </div>
                </div> 
                <div className="  text-center ">
                    <li className='navbar-links text-base font-semibold'>About</li>
                </div>
                <div className="text-center ">
                    <li className='navbar-links text-base font-semibold'>Contact Us</li>
                </div>
            </nav>
            
            {/*div for Hamburger Icon */}
            
            <div className=" mr-3 flex flex-col justify-center items-end">
            <button
              onClick={() => setHamburgerClicked(!hamburgerClicked)}
              type="button"
              className=" inline-flex items-center p-0.5 ml-3 text-xs text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

            {/* Mobile navbar container*/} 
        </div>
        <div className={`${mobileNavbarClass} text-center w-screen md:hidden`}>
          <nav className={`${mobileNavbarClass} bg-white  shadow-lg md:hidden mt-14 flex flex-col justify-center items-center  gap-1`}>
        <Link to="/"> <li className='navbar-links text-xs  font-semibold mt-1'>Home</li> </Link> 
                   <div className="dropdown">
                   <li className="navbar-links product-link text-base font-semibold mt-1"
                    onClick={() => setMobileProductClicked(!mobileProductClicked)}
                   >Products
                   </li>
                   <div className={` ${mobileDropDownClass} dropdown-content-mobile p-2 rounded-md`}>
                       <Link to="/upload"><li className=" text-base font-semibold">Upload</li> </Link>
                       <Link to="/analyse"><li className=" text-base font-semibold">Analyse</li></Link>
                   </div>
               </div>
               <li className='navbar-links text-base font-semibold mt-1'>About</li>
               <li className='navbar-links text-base font-semibold mt-1 mb-2'>Contact Us</li>
               </nav>
            </div>
    </div>
  )
}

export default Navbar


/* 
 <div className={` ${mobileNavbarClass}  bg-gray-500 z-10 md:hidden w-screen overflow-hidden `}>
                   
         
         
       </div>

*/