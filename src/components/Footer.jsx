import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='border-4 w-[1240px] mt-68 gap-0 ms-32 grid grid-cols-3'>
      <div className=''>
        <img  className='' src={assets.logo}  />
        <p>lorem</p>
      </div>
      <div className='ms-48'>
        <h2>COMPANY</h2>
        <ul className=''>
          <li>HOME</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer