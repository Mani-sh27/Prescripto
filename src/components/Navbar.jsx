import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [open, setIsOpen] = useState(false)
  const [token, setToken] = useState(false)
  const navigate =useNavigate()
  return (
    <header>
      <div className='flex justify-between mx-42 ms-30 pb-4 border-b-[0.1px] sm:flex sm: min-w-[890px]'>
        <div>
          <img className=' mt-9 text-2xl  sm:mt-6 min-w-45' src={assets.logo} alt="" />
        </div>
        <button className=' flex relative left-60 top-12 text-3xl sm:hidden' onClick={() => setIsOpen(!open)}>
          {open ? '✖' : '☰'}
        </button>
        <div  >
          <ul className='mt-10  gap-10   sm:flex hidden'>
            <NavLink className={({ isActive }) => `pb-1 ${isActive ? ' border-b-2' : ''}`} to='/'>
              <li className='font-semibold text-sm'>HOME</li>
            </NavLink>

            <NavLink className={({ isActive }) => `pb-1 ${isActive ? ' border-b-2' : ''}`} to='/doctors'>
              <li className='font-semibold text-sm'>ALL DOCTORS</li>
            </NavLink>
            <NavLink className={({ isActive }) => `pb-1${isActive ? ' border-b-2' : ''}`} to='/about'>
              <li className='font-semibold text-sm'>ABOUT</li>
            </NavLink>
            <NavLink className={({ isActive }) => `pb-1${isActive ? ' border-b-2' : ''}`} to='/contact'>
              <li className='font-semibold text-sm'>CONTACT</li>
            </NavLink>
            <NavLink to='/admin'>
              <li className='border px-3 py-1 rounded-full -mt-1 font-semibold text-xs transition-all duration-700 hover:bg-black hover:text-white '>Admin Panel</li>
            </NavLink>
            <div className='flex ms-40  group'>
              {
                token ? <div className='w-9  flex -top-3 me-5  relative'>
                  <img src={assets.profile_pic} className='rounded-full me-2 ' />
                  <img className='text-xs' src={assets.dropdown_icon} />
                  <div className='absolute top-0 right-0 pt-14  w-[200px] hidden group-hover:block'>
                    <div className='bg-gray-100 px-8 py-4 leading-7 z-10'>
                      <ul className='-ms-4'>
                        <p onClick={()=>navigate('/my-Profile')} className='cursor-pointer hover:font-semibold'>My Profile</p>
                        <p onClick={()=>navigate('/my-Appointments')} className='cursor-pointer hover:font-semibold'>My-Appointments</p>
                        <p onClick={()=>setToken(false)} className='cursor-pointer hover:font-semibold'>LogOut</p>
                      </ul>
                    </div>
                  </div>
                </div> : <div className='hidden sm:block '>
                  <button type='button' className='border  cursor-pointer -mt-3 px-5 bg-blue-500 text-white py-2 rounded-full '>Create account</button>
                </div>
              }
 
            </div>
          </ul>
        </div>
      </div>
       {/* Mobile Collapsed Menu */}
{/* Mobile Sliding Menu */}
<div
  className={`sm:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Close button */}
  <button
    className="absolute top-5 right-6 text-3xl"
    onClick={() => setIsOpen(false)}
  >
    ✖
  </button>

  <ul className="flex flex-col items-center justify-center h-full gap-8 text-xl font-semibold">
    <NavLink to="/" onClick={() => setIsOpen(false)}>
      <li>HOME</li>
    </NavLink>
    <NavLink to="/doctors" onClick={() => setIsOpen(false)}>
      <li>ALL DOCTORS</li>
    </NavLink>
    <NavLink to="/about" onClick={() => setIsOpen(false)}>
      <li>ABOUT</li>
    </NavLink>
    <NavLink to="/contact" onClick={() => setIsOpen(false)}>
      <li>CONTACT</li>
    </NavLink>
    <NavLink to="/admin" onClick={() => setIsOpen(false)}>
      <li className="border px-4 py-2 rounded-full text-sm">Admin Panel</li>
    </NavLink>

    {token ? (
      <div className="flex flex-col gap-4 text-lg">
        <p
          onClick={() => {
            navigate("/my-Profile");
            setIsOpen(false);
          }}
          className="cursor-pointer hover:font-semibold"
        >
          My Profile
        </p>
        <p
          onClick={() => {
            navigate("/my-Appointments");
            setIsOpen(false);
          }}
          className="cursor-pointer hover:font-semibold"
        >
          My Appointments
        </p>
        <p
          onClick={() => setToken(false)}
          className="cursor-pointer hover:font-semibold"
        >
          Log Out
        </p>
      </div>
    ) : (
      <button
        type="button"
        className="border cursor-pointer px-5 bg-blue-500 text-white py-2 rounded-full"
      >
        Create account
      </button>
    )}
  </ul>
</div>
    </header>
  )
}

export default Navbar