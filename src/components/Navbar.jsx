import React from 'react'
import   { assets } from '../assets/assets_frontend/assets';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
      <div className='flex justify-between mx-32'>
        <div>
            <img src={assets.logo} alt="" />
        </div>
        <div>
          <ul className='flex mt-4 gap-10 -ms-32'>
            <NavLink className={({isActive})=>`pb-1 ${isActive ? 'border-none border-b-2': '' }`} to='/'>
              <li className='font-semibold'>HOME</li>
              
            </NavLink>

            <NavLink className={({isActive})=>`pb-1 ${isActive ? 'border-none border-b-2' : ''}`} to='/doctors'>
              <li className='font-semibold'>ALL DOCTORS</li>
            </NavLink>
            <NavLink className={({isActive})=>`pb-1${isActive ? 'border-b-red-500' : ''}`} to='/about'>
              <li className='font-semibold'>ABOUT</li>
            </NavLink>
            <NavLink className={({is})} to='/contact'>
              <li className='font-semibold'>CONTACT</li>
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