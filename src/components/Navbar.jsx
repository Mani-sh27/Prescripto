import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
const navigate = useNavigate();
const [showMenu, setShowMen]

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

        <button className='me-20 bg-blue-400 rounded-full px-8 cursor-pointer '>Create Account</button>

      </div>
      <hr className='mx-28' />




    </header>

  )
}

export default Navbar