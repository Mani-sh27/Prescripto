import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='w-[1240px] mt-68 gap-0 ms-32 grid grid-cols-3'>
      <div className=''>
        <img  className='' src={assets.logo}  />
        <p className='flex-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic, quam, ipsa dicta nihil, culpa sequi in voluptas unde architecto libero cum aut veniam beatae adipisci dolores odio officia modi quibusdam molestias ipsam itaque. Architecto rem deleniti nemo </p>
      </div>
      <div className='ms-48'>
        <h2 className='text-2xl font-medium'>COMPANY</h2>
        <ul className='mt-8 text-gray-600 text-sm'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer