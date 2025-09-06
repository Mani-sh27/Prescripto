import React from 'react'
import { assets, doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

   const navigate = useNavigate();
  const {doctors} = useContext(AppContext)
  return (
    <div>
      <h1 className='text-4xl mt-20  text-center font-semibold'>Top Doctors</h1>
      <p className='text-center mt-4'>Simple Browse  through our extensive list of trusted doctors</p>
      <div className='grid grid-cols-2 gap sm:grid-cols-5 grid-rows-2 mx-20'>
        {
          doctors.slice(0, 10).map((item, index) => (
            <div className=''>
              <div className='mt-6 w-54 mx-auto cursor-pointer border-blue-100 border-2 rounded-2xl hover:-translate-y-2 duration-500 transition-all'>
                <img className='bg-blue-50 w-7xl rounded-t-2xl ' src={item.image} />
                <div>
               <p className='w-2 h-2 relative top-6 left-4 bg-green-500 rounded-full' ></p> <p className='ms-8 mt-2 text-green-600'>Available</p>
                </div>
                <div>
                  <p className='my-2 mx-5 font-semibold text-md'>{item.name}</p>
                  <p className='ms-5 -mt-2 text-sm mb-5'>{item.speciality}</p>
                </div>

              </div>
            </div>

          ))
        }
      </div>
      <button className='bg-blue-50 lg:ms-[650px] p-5 mt-4 cursor-pointer  rounded-full w-48 sm:flex ms-14 ' onClick={()=>{navigate('/doctors'); window.scroll(0,0)}}>more</button>
    </div>
  )
}

export default TopDoctors