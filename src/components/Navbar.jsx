import React from 'react'
import   { assets } from '../assets/assets_frontend/assets';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
      <div className='flex justify-between mx-42'>
        <div>
            <img className='mt-6 w-45' src={assets.logo} alt="" />
        </div>
        <div>
          <ul className='flex mt-4 gap-10 -ms-32 '>
            <NavLink className={({isActive})=>`pb-1 ${isActive ? ' border-b-2': '' }`} to='/'>
              <li className='font-semibold text-sm'>HOME</li>
            </NavLink>

            <NavLink className={({isActive})=>`pb-1 ${isActive ? ' border-b-2' : ''}`} to='/doctors'>
              <li className='font-semibold text-sm'>ALL DOCTORS</li>
            </NavLink>
            <NavLink className={({isActive})=>`pb-1${isActive ? ' border-b-2' : ''}`} to='/about'>
              <li className='font-semibold text-sm'>ABOUT</li>
            </NavLink>
            <NavLink className={({isActive})=>`pb-1${isActive ? ' border-b-2' : ''}`} to='/contact'>
              <li className='font-semibold text-sm'>CONTACT</li>
            </NavLink>
             <NavLink className={({isActive})=>`pb-1${isActive ? ' border-b-2' : ''}`} to='/admin'>
              <li className='font-semibold text-sm'>Admin Pan</li>
            </NavLink>
          </ul>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>

    </header>
  )
}

export default Navbar