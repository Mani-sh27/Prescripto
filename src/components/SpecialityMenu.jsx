import React from 'react'
import { assets, specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div>
      <section className='relative'>
          <p className='sm:relative top-10 text-center text-3xl font-semibold '>Find by Speciality</p>
          <p className='sm:absolute text-center text-sm left-[580px] mt-10  top-20  '>Simply browse through our extensive list of trusted doctors,<br />schedule your appointment hassle-free.</p>
      </section>
       <section id='Speciality' className=' sm:flex gap-5 justify-center mt-30 text-center'>
            { specialityData.map((item , index)=>(
              <Link key={index} to={`/doctors/${item.speciality}`}>
                  <img className='sm:size-20 mt-15' src={item.image}   />
                  <p className='sm:text-sm mt-2 '>{item.speciality}</p>
              </Link>
              ))}
       </section>
    </div>
  )
}

export default SpecialityMenu