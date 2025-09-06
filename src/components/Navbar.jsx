import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    
        
          ) : (
            <button className='me-20 bg-blue-400 rounded-full px-8 cursor-pointer mx-auto sm:mx-0 py-2 text-sm sm:text-base'>
              Create Account
            </button>
          )
        }
      </div>

      <hr className=' sm:flex mx-12' />
    </header>
  )
}

export default Navbar
