import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import StarIcon from '@mui/icons-material/Star';
const ScrollingText = () => {
  return (
    <div className='scrolling-text-container bg-[#6507FF] py-[2rem] overflow-hidden text-white text-[3.5rem]'>
      <Marquee>
      <div>
      <span><StarIcon/>  AI</span> <span>ART!</span> <span>UNLEASH</span> <span>YOUR</span> <span>IMAGINATION</span> <span>WITH</span> <span>OUR</span> <span>POWERFUL</span> <span>TOOL</span> <span>AND</span> <span>YOUR</span> <span>CREATIVITY</span>
      </div>
      </Marquee>
    </div>
  );
};

export default ScrollingText;
