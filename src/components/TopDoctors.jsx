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
      

          ))
        }
      </div>
      <button className='bg-blue-50 lg:ms-[650px] p-5 mt-4 cursor-pointer  rounded-full w-48 sm:flex ms-14 ' onClick={()=>{navigate('/doctors'); window.scroll(0,0)}}>more</button>
    </div>
  )
}

export default TopDoctors