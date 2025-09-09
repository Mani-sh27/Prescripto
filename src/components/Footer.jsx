import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='border-4 w-[1240px] mt-48 gap-38 ms-32 grid grid-cols-3'>
      <div className=''>
        <img  className='' src={assets.logo}  />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div>
        <h2>dsfuhsu</h2>
      </div>
    </div>
  )
}

export default Footer