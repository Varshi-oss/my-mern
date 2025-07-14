import React, { useState } from 'react';
import { assets } from '../assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-500'>
      <img className='w-44 cursor-pointer ' src={assets.logo} alt="Logo" />

      <ul className='hidden md:flex items-start gap-5 font-medium mt-7'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden ' />
        </NavLink>
        <NavLink to='/doctors' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {
          token ? (
            <div className="flex items-center group relative gap-2 cursor-pointer mt-7 ">
              <img src={assets.profile} alt="Profile" className="rounded-full w-8 " />
              <img src={assets.dropdown_icon} className="w-2.5" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-400 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 flex flex-col gap-2 rounded p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light'>
              Create account
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Navbar