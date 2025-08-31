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
            <div className='  mt-6  w-60 mx-auto cursor-pointer border-blue-100 border-2 rounded-2xl hover:-translate-y-2 duration-500 transition-all'>
              <img className='bg-blue-50  rounded-t-2xl' src={item.image} alt="" />
              <div>
                <p className='ms-8'>Available</p>
              </div>
              <div>
                <p className='my-2 mx-5 font-semibold text-md'>{item.name}</p>
                <p className='ms-5 -mt-2 text'>{item.speciality}</p>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TopDoctors