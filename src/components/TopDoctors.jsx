import React from 'react'
import { assets, doctors } from '../assets/assets_frontend/assets';

const Doctors = () => {
  return (
    <div>
      <p className='sm:text-center mt-30'>Top Doctors</p>
      <p className='sm:text-center'>Simply browse through our extensive list of trusted doctors.</p>
      <div className=' sm: gap-5 grid w-[1240px] mt-10 relative left-32 grid-cols-5'>
        {
          doctors.slice(0,10).map((item,index)=>(
              <div className='sm:border-1 rounded-xl border-blue-200 shadow- '>
                <img src={item.image} alt="" />
                <div>
                  <p className=''>Available</p>
                  <p>{item.name}</p>
                  <p>{item.speciality}</p>
                </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Doctors