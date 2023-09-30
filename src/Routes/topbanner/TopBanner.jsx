import React from 'react'

const TopBanner = () => {
    const style = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600, // Semibold (600) weight
    };

  return (
    <div className='bg-[#242424] text-center text-[#ffffff] py-[10px] px-[10px] lg:text-[13px]'  style={style}>🥳 <span className='text-[#DDB1FF]'>Choose your model and</span> get started</div>
  )
}

export default TopBanner