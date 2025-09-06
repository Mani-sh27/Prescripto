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
            <NavLink to='/'>
              <li className=''></li>
            </NavLink>
            <NavLink to='/doctors'>
              <li className=''></li>
            </NavLink>
            <NavLink to='/about'>
              <li className=''>About</li>
            </NavLink>
            <NavLink to='/contact'>
              <li className=''>Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>

    </header>
  )
}

export default Navbar