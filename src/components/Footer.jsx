import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='border-4 w-[1240px] mt-68 gap-0 ms-32 grid grid-cols-3'>
      <div className=''>
        <img  className='' src={assets.logo}  />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic, quam, ipsa dicta nihil, culpa sequi in voluptas unde architecto libero cum aut veniam beatae adipisci dolores odio officia modi quibusdam molestias ipsam itaque. Architecto rem deleniti nemo sequi</p>
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