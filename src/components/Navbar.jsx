import React from 'react'
import   { assets } from '../assets/assets_frontend/assets';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
      <div className='flex justify-between'>
        <div>
            <img src={assets.logo} alt="" />
        </div>
        <div>
          <ul className='flex gap-8'>
            <NavLink className={({isActive})=>`pb-1 ${isActive ? 'border-none border-b-2': '' }`} to='/'>
              <li className=''>HOME</li>
              
            </NavLink>

            <NavLink className={({isActive})=>`pb-1 ${isActive ? 'border-none border-b-2' : ''}`} to='/doctors'>
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
        <div>

        </div>
      </div>

    </header>
  )
}

export default Navbar