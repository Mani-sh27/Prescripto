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
          <ul className='flex mt-10 gap-10 ms-28'>
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
             <NavLink to='/admin'>
              <li className='border px-3 py-1 rounded-full -mt-1 font-semibold text-xs hover:text '>Admin Panel</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <button type='button' className='border cursor-pointer mt-7 px-5 bg-blue-500 text-white py-2 rounded-full ms-10'>Create account</button>
        </div>
        <div>

        </div>
      </div>

    </header>
  )
}

export default Navbar