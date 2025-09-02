import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true)

  return (
    <header>
      <div className='flex justify-around m-4'>
        <img src={assets.logo} className='' />
        <ul className='flex gap-16 items-center me-6 hover:underline'>
          <NavLink to='/'>
            <li>Home</li>
            <hr className='border-none h-0.5  bg-primary w-3/5 m-auto' />
          </NavLink>
          <NavLink to='/doctors'>
            <li>ALL DOCTOR</li>
            <hr className='border-none h-0.5  bg-primary w-3/5 m-auto' />
          </NavLink>
          <NavLink to='/about'>
            <li>ABOUT</li>
            <hr className='border-none h-0.5  bg-primary w-3/5 m-auto' />
          </NavLink>
          <NavLink to='/contact'>
            <li>CONTACT</li>
            <hr className='border-none h-0.5  bg-primary w-3/5 m-auto' />
          </NavLink>
        </ul>
        {
          token ?
            <div >
              <img className='w-9 rounded-full m-' src={assets.profile_pic} alt="" />
              <img src={assets.dropdown_icon} />
              <div className=''>
              <p onClick={()=>navigate('my-profile')}></p>
              <p onClick={()=>navigate('my-appointments')}></p>
              <p></p>
              </div>
            </div>
            : <button className='me-20 bg-blue-400 rounded-full px-8 cursor-pointer '>Create Account</button>

        }

      </div>
      <hr className='mx-28' />




    </header>

  )
}

export default Navbar