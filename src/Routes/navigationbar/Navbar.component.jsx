import React, { useState } from 'react'
import logo from '../../utils/generate1logo.png'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Button } from '@mui/material';
const Navbar = () => {


    const navBtnStyle = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600', 
    };

    const activeBtn = {
  color: '#ffffff', 
};




  return (
    <div className='bg-[#151515] flex justify-between items-center py-[20px] lg:px-[5rem] md:px-[2rem] px-[1rem] relative sticky z-[9999] top-0'>
        <div className=''>
            <img src={logo} alt="Generate.one Logo" className='w-[2.8125rem] sm:w-[2.45rem] shrink-0'/>
        </div>
        <div className='absolute flex items-center left-1/2 transform -translate-x-1/2 hidden lg:block'>
            <ul className='flex text-[#AEAEAE] text-[0.8em] gap-[3.25rem] shrink-0' style={navBtnStyle}>
                <li style={activeBtn}>Welcome</li>
                <li>Pricing</li>
                <li>API</li>
                <li>Documentation</li>
                <li>Partner</li>
            </ul>
        </div>
        <span className='hidden lg:block'>
        <div  style={navBtnStyle} className='flex gap-[1rem] '>
          <button className='border-none text-[#C7C7C7] text-[0.8rem] shrink-0'>Sign Up</button>
          <button className='bg-[#6507FF] text-white text-[0.8em] px-[2.7em] py-[1em]  rounded-full shrink-0'>Launch</button>
        </div>
        </span>
        <div className=' block lg:hidden'>
          <div className='bg-[#2A2A2A] p-[1em] rounded-sm'>
            <DehazeIcon className='text-[#636363]'/>
          </div>
        </div>
    </div>
  )
}

export default Navbar