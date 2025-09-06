import React from 'react'
import   { assets } from '../assets/assets_frontend/assets';
const Navbar = () => {
  return (
    <header>
      <div className='flex container'>
        <div>
            <img src={assets.logo} alt="" />
        </div>
      </div>

    </header>
  )
}

export default Navbar