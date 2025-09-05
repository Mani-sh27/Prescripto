import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className='flex'>
        <div>
            <p>Book Appointment</p>
            <p>with 100+ Truste Doctor</p>
            <button className=''  type='button'>Create account</button>
        </div>
        <div className='md-block hidden'>
            <img  className='w-68' src={assets.appointment_img}  />
        </div>
    </div>
  )
}

export default Banner