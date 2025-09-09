import React from 'react'
import { assets, specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div>
      <section className=' relative top-16 sm:relative sm:top-4'>
          <p className='text-center relative left-48  text-5xl sm:relative top-10 sm:text-3xl font-semibold '>Find by Speciality</p>
          <p className='relative top-20 text-center sm:relative sm:text-center text-sm  sm:top-20  '>Simply browse through our extensive list of trusted doctors,<br />schedule your appointment hassle-free.</p>
      </section>
       <section id='Speciality' className=' overflow-x-scroll relative top-18 flex justify-center sm:flex gap-5 sm:justify-center mt-30 text-center'>
            { specialityData.map((item , index)=>(
              <Link key={index} to={`/doctors/${item.speciality}`}>
                  <img className='sm:size-20 mt-8' src={item.image}   />
                  <p className='sm:text-sm mt-2'>{item.speciality}</p>
              </Link>
              ))}
       </section>
    </div>
  )
}

export default SpecialityMenu