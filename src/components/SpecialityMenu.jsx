import React from 'react'
import { assets, specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div>
      <section>
          <p className='sm:relative top-10 text-center text-3xl font-semibold '>Find by Speciality</p>
          <p className='sm:relleft-20 top-20 '>Simply browse through our extensive list of trusted doctors,<br />schedule your appointment hassle-free.</p>
      </section>
       <section id='Speciality' className=' sm:flex gap-5 justify-center mt-30 text-center'>
            { specialityData.map((item , index)=>(
              <Link key={index} to={`/doctors/${item.speciality}`}>
                  <img className='sm:size-20' src={item.image}  />
                  <p className=''>{item.speciality}</p>
              </Link>
              ))}
       </section>
    </div>
  )
}

export default SpecialityMenu