import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <header>
      <div className='flex justify-around m-4 flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0'>

        {/* Logo */}
        <img src={assets.logo} className='w-32 sm:w-40 mx-auto sm:mx-0' />

        {/* Menu */}
        <ul className='  me-6 hover:underline md:gap-16 text-center sm:flex hidden'>
          <NavLink to='/'>
            <li>Home</li>
            <hr className='border-none h-0.5 bg-primary  m-auto  sm:block' />
          </NavLink> 
          <NavLink to='/doctors'>
            <li>ALL DOCTOR</li>
            <hr className='border-none h-0.5 bg-primary  m-auto hidden sm:block' />
          </NavLink>
          <NavLink to='/about'>
            <li>ABOUT</li>
            <hr className='border-none h-0.5 bg-primary  m-auto hidden sm:block' />
          </NavLink>
          <NavLink to='/contact'>
            <li>CONTACT</li>
            <hr className='border-none h-0.5 bg-primary  m-auto hidden sm:block' />
          </NavLink>
        </ul>

        {/* Profile or Button */}
        {
          token ? (
            <div className='flex items-center gap-2  sm:flex relative left'>
              <img className='w-9 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-4 cursor-pointer' src={assets.dropdown_icon} alt="" />
              <div className='hidden'>
                <p onClick={() => navigate('my-profile')}></p>
                <p onClick={() => navigate('my-appointments')}></p>
                <p onClick={() => navigate('my-appointments')}></p>
              </div>
            </div>
          ) : (
            <button className='me-20 bg-blue-400 rounded-full px-8 cursor-pointer 
                               mx-auto sm:mx-0 py-2 text-sm sm:text-base'>
              Create Account
            </button>
          )
        }
      </div>

      <hr className='mx-4 sm:flex mx-28' />
    </header>
  )
}

export default Navbar
