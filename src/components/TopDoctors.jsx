import React from 'react'
import { assets, doctors } from '../assets/assets_frontend/assets'

const TopDoctors = () => {
  return (
    <div>
      <h1 className='text-4xl mt-20  text-center font-semibold'>Top Doctors</h1>
      <p className='text-center mt-4'>Simple Browse through our extensive list of trusted doctors</p>
      <div className='grid w-full grid-cols-auto'>
        {
          doctors.slice(0, 10).map((item, index) => (
            <div className=' size-50  mt-16  cursor-pointer border-blue-50 border hover:-translate-y-2 duration-500 transition-all'>
              <img className='bg-blue-50  rounded-2xl ' src={item.image} alt="" />
              <div>
                <p className='ms-8'>Available</p>
              </div>
              <div>
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

export default TopDoctors