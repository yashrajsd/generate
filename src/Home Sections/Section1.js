import React from 'react'
import sec1img from '../utils/sec1img.jpg'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Fade from 'react-reveal'
import VideoPlayer from './Components/VideoPlayer';
import videobg from '../utils/video2.mp4'

const Section1 = () => {
    const BoldFont = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600', // bold (600) weight
    };

    const MediumPoppins ={
        fontFamily:'Poppins, sans-serif',
        fontWeight:'600'
    }

    const transparentInputStyle = {
      background: 'transparent',
      color: 'white',
      outline:'none'
    };

  return (
    <div className='flex flex-col justify-center  items-center'>
       <div className='mt-24 flex flex-col justify-center gap-[8vw] items-center'>
        <div className='text-center flex flex-col items-center justify-center gap-[2rem]'>
            <h1 className='text-white text-[4.4rem] m-0' style={{...BoldFont,lineHeight:'1'}}>Explore the <span>Power</span> of AI!</h1>
            <p className='text-[#CECECE] text-[0.9rem]  font-medium' style={MediumPoppins}>generate.one is a suite of magical AI tools. Generate original images at scale, modify photos,<br/>expand pictures beyond their original borders, or create custom AI models.</p>
            {/* <button className='rounded-full border-[1px] border-[#2A2A2A] lg:w-[20rem] text-white flex lg:h-[3.5rem] justify-center items-center' style={MediumPoppins} >
                <span className='w-[70%]'>
                Get Started   
                </span> 
                <span className='w-[30%] h-[100%]'>
                <div className='rounded-full bg-[#6507FF] h-[100%] flex justify-center items-center'>
                    <RocketLaunchIcon className='text-white'/>
                </div>
                </span>
            </button> */}
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
            <p className='text-white font-semibold text-[0.8rem] bg-[#1D1D1D] py-[0.7rem] px-[1rem] rounded-full'><span className='text-[#6507FF]'>100 free credits/month</span> no credit card required</p>
        </div>
        <div className='sec1gradient '>
          <img src={sec1img} alt="" className='rounded-t-[3.5vw] w-[68.958vw] h-[27.135vw]' />
        </div>
        
    </div>
        {/* <div className='sec1gradient mt-[5rem]'>
        <VideoPlayer video={videobg} innerShadow={true}/>
          <img src={sec1img} alt="" className='rounded-t-[3.5vw] w-[68.958vw] h-[27.135vw]' />
        </div>
         */}
    </div>
  )
}

export default Section1