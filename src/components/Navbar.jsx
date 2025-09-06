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
            <NavLink to='/'}>

            </NavLink>
          </ul>
        </div>
      </div>

    </header>
  )
}

export default Navbar