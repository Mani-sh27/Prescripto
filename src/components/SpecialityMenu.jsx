import React from 'react'
import { assets, specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div className='ms-4 sm:-ms-0'>
      <section className=' relative top-16 sm:relative left-8 sm:top-4'>
        <p className='text-center relative left-48  text-5xl  sm:relative top-10 sm:-left-18  sm:text-3xl font-semibold '>Find by Speciality</p>
        <p className='relative left-48 text-wrap top-20 text-center sm:relative sm:text-center sm:-left-18 text-sm  sm:top-20  '>Simply browse through our extensive list of trusted doctors,<br />schedule your appointment hassle-free.</p>
      </section>
      <section id='Speciality' className='    relative top-12 left-60 flex justify-center sm:flex sm:relative sm:-left-1 gap-5 sm:justify-center mt-20 text-center'>
        {specialityData.map((item, index) => (
          <Link key={index} to={`/doctors/${item.speciality}`}>
            <div className="w-20 h-20 sm:w-14 sm:h-14 flex items-center justify-center">
              <img src={item.image} className="object-contain max-w-full max-h-full" />
            </div>

            <p className='sm:text-sm mt-2'>{item.speciality}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default SpecialityMenu