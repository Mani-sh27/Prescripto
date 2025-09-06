import React from 'react'
import   { assets } from '../assets/assets_frontend/assets';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
      <div className='flex'>
        <div>
            <img src={assets.logo} alt="" />
        </div>
        <div>
          <ul>
            <NavLink className={({isAtive})=>`pb-1 ${isAtive}`} to='/'>
              <li className=''>HOME</li>
            </NavLink>
            <NavLink to='/doctors'>
              <li className=''>ALL DOCTORS</li>
            </NavLink>
            <NavLink to='/about'>
              <li className=''>ABOUT</li>
            </NavLink>
            <NavLink to='/contact'>
              <li className=''>CONTACT</li>
            </NavLink>
          </ul>
        </div>
      </div>

    </header>
  )
}

export default Navbar