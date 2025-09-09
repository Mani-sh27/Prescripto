import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='border-4 w-[1200px] ms-32'>
      <div className=''>
        <img src={assets.logo} alt="" />
      </div>
    </div>
  )
}

export default Footer