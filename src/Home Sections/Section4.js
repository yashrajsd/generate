import React from 'react'
import img1 from '../utils/sec4img1.png'
import img2 from '../utils/sec4img1.png'
import img3 from '../utils/sec4img1.png'

const MediumPoppins ={
  fontFamily:'Poppins, sans-serif',
  fontWeight:'500'
}

const RegularPoppins={
  fontFamily:'Poppins, sans-serif',
  fontWeight:'400'
}


const frames=[
  {
    heading:'Dream it, type it, see it.',
    para:'Go from text prompt to astounding art in a snap with Generative Fill, Add and remove content from images using everyday language. Plus, expand your canvas and increase aspect ratios with Generative Expand',
    img:img1
  },
  {
    heading:'Dream it, type it, see it.',
    para:'Go from text prompt to astounding art in a snap with Generative Fill, Add and remove content from images using everyday language. Plus, expand your canvas and increase aspect ratios with Generative Expand',
    img:img1
  },
  {
    heading:'Dream it, type it, see it.',
    para:'Go from text prompt to astounding art in a snap with Generative Fill, Add and remove content from images using everyday language. Plus, expand your canvas and increase aspect ratios with Generative Expand',
    img:img1
  }
]

const Section4 = () => {
  return (
    <div className='text-center'>
        <h1 className='text-white text-5xl' style={{...MediumPoppins}}>
        Generative Fill
        </h1>
        <p className='text-white mt-2'  style={{...MediumPoppins}}>
        Create, add to, remove or replace images right in Generaet.One with simple text prompts
        </p>
        <div className='grid md:grid-rows-1 sm:grid-rows-3 grid-flow-col gap-[5rem] justify-center items-center'>
            {frames.map((frame)=>{
              return(
              <div className='bg-[#171717] min-h-[10rem]  w-fit lg:p-[1.4rem] relative'>
                  <img src={frame.img} className='lg:w-[18rem]'/>
                  <div className='absolute bottom-0'>
                    <span className='text-white text-left'>
                      <h1 style={{...MediumPoppins}}>
                        {frame.heading}
                      </h1>
                      <p style={{...RegularPoppins}} className='lg:text-[0.8rem]'>
                        {frame.para}
                      </p>
                    </span>
                  </div>
              </div>
              )
            })}
        </div>
    </div>
  )
}

export default Section4