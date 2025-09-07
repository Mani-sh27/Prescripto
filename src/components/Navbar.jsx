import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets';
import { Navigate, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [open, setIsOpen] = useState(false)
  const [token, setToken] = useState(true )
  return (
    <header>
      <div className='flex justify-between mx-42 ms-30 pb-4 border-b-[0.1px] sm:flex min-w-[890px]    '>
        <div>
          <img className=' mt-9 text-2xl  sm:mt-6 min-w-45' src={assets.logo} alt="" />
        </div>
        <button className=' flex relative left-60 top-12 text-3xl sm:hidden' onClick={() => setIsOpen(!open)}>
          {open ? '✖' : '☰'}
        </button>
        <div>
          <ul className='mt-10 gap-10 ms-16 sm:flex hidden'>
            <NavLink className={({ isActive }) => `pb-1 ${isActive ? ' border-b-2' : ''}`} to='/'>
              <li className='font-semibold text-sm'>HOME</li>
            </NavLink>

            <NavLink className={({ isActive }) => `pb-1 ${isActive ? ' border-b-2' : ''}`} to='/doctors'>
              <li className='font-semibold text-sm'>ALL DOCTORS</li>
            </NavLink>
            <NavLink className={({ isActive }) => `pb-1${isActive ? ' border-b-2' : ''}`} to='/about'>
              <li className='font-semibold text-sm'>ABOUT</li>
            </NavLink>
            <NavLink className={({ isActive }) => `pb-1${isActive ? ' border-b-2' : ''}`} to='/contact'>
              <li className='font-semibold text-sm'>CONTACT</li>
            </NavLink>
            <NavLink to='/admin'>
              <li className='border px-3 py-1 rounded-full -mt-1 font-semibold text-xs transition-all duration-700 hover:bg-black hover:text-white '>Admin Panel</li>
            </NavLink>
            <div className='flex'>
              {
                token ? <div className='w-9  flex -top-3 relative'>
                  <img src={assets.profile_pic} className='rounded-full me-2 ' />
                  <img src={assets.dropdown_icon}  />
                  <div className='absolute top-0 right-0 pt-14  w-[200px] '>
                    <div className='bg-gray-100 px-8 py-6 leading-7 ms-'>
                      <p className=''>My Profile</p>
                      <p className=''>My-Appointments</p>
                      <p className=''>LogOut</p>
                    </div>
                  </div>
                </div> : <div className='hidden sm:block'>
                  <button type='button' className='border cursor-pointer mt-7 px-5 bg-blue-500 text-white py-2 rounded-full ms-10'>Create account</button>
                </div>
              }

            </div>
          </ul>

        </div>

      </div>


    </header>
  )
}

export default Navbar