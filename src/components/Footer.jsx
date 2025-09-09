import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <>
      <div className='sm:w-[1240px] w-[860px] flex-col flex gap-16 mt-48 sm:gap-0 ms-32 sm:grid grid-cols-3'>
        <div className=''>
          <img className='w-44' src={assets.logo} />
          <p className=' text-xl flex-nowrap sm:leading-7 break-all sm:text-sm mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic, quam, ipsa dicta nihil, culpa sequi in voluptas unde architecto libero cum aut veniam beatae adipisci dolores odio officia modi quibusdam molestias ipsam itaque. Architecto rem deleniti nemo </p>
        </div>
        <div className='sm:ms-58'>
          <h2 className='text-2xl font-medium'>COMPANY</h2>
          <ul className='mt-8 text-gray-600 text-sm leading-7'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='sm:ms-38'>
          <h2 className='text-2xl font-medium'>Get In Touch</h2>
          <p className='mt-8 text-gray-600 text-sm leading-7'>+0-000-000-000</p>
          <p className=' text-gray-600 text-sm leading-7'>greatstackdev@gmail.com</p>
        </div>

      </div>
      <hr className='border-t-1 mx-32 mt-4 text-gray-500 sm:w-[60px]  w-[860px]' />
      <p className='mt-5 text-center  text-sm text-gray-500'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
    </>

  )
}

export default Footer