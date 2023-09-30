import React from 'react';
import img1 from '../utils/sec0img1.jpg';
import img2 from '../utils/sec0img2.jpg';
import img3 from '../utils/sec0img3.png';
import vector1 from '../utils/Vector1.png';
import vector2 from '../utils/Vector2.png';

const Section0 = () => {
  const BoldFont = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600', // bold (600) weight
  };

  const MediumPoppins = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
  };

  const transparentInputStyle = {
    background: 'transparent',
    color: 'white',
    outline:'none'
  };

  return (
    <div>
      <div className='flex justify-center flex-col items-center gap-[2rem]  min-h-[85vh] '>
        <h1 className='text-white text-7xl text-center leading-[6rem]' style={{ ...BoldFont }}>
          unleash your <span className='bg-[#6C27FF] rounded-lg mx-2 px-2'>Future</span> Creativity in<br className='hidden lg:block'/> an Instant, Powered by AI
        </h1>
        <div className='flex bg-[#2F2F2F] p-3 min-w-[30rem] rounded-lg min-h-[5rem]' style={{...BoldFont}}>
          <input
            type='text'
            placeholder='Describe what you want'
            style={transparentInputStyle}
            className='w-[70%]'
          />
          <button className='w-[30%] lg:block hidden text-white bg-[#6C27FF] rounded-lg'>
            Generate Now
          </button>
        </div>
        <div className='block md:hidden'>
          <button>
            Generate Now
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col gap-4 bg-[#1D1D1D] h-44 overflow-hidden relative'>
        <h1 className='text-white text-2xl relative z-[999]' style={{ ...MediumPoppins }}>
          <span className='text-[#642EFF] '>100 free</span> credits/month no credit card required
        </h1>
        <button className='relative z-[999] rounded-full bg-[#2E2E2E] text-[#969696] py-2 px-4 hover:bg-[#6507FF] hover:text-white duration-300'>
          Avail Now
        </button>
        <span className='absolute right-0 top-0 hidden md:block'>
          <img src={img3} alt="Image 3" />
        </span>
        <span className='absolute left-0 top-0 hidden md:block'>
          <img src={img3} alt="Image 3" />
        </span>
        <span className='absolute right-0 top-0 hidden md:block'>
          <img src={vector1} alt="Image 3" />
        </span>
        <span className='absolute left-0 top-0 hidden md:block'>
          <img src={vector2} alt="Image 3" />
        </span>
      </div>
    </div>
  );
};

export default Section0;
