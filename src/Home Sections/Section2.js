import React from 'react'
import img1 from '../utils/img1.png'
import img2 from '../utils/img2.png'
import img3 from '../utils/img3.png'
import img4 from '../utils/img4.png'
import img5 from '../utils/img5.png'
import img6 from '../utils/img6.png'
import { Fade } from 'react-reveal'

const fields=[{
    image:img1,
    heading:"Generate Fill",
    para:"Unleash the power of image creation with ease. Produce stunning visuals and graphics."
},{
    image:img2,
    heading:"AI Editor Tools",
    para:'Elevate your images to the next level using cutting-edge AI tools and a wide range of artistic filters.'
},{
    image:img3,
    heading:'Text-2-Image',
    para:'Easily share your visual creations with friends, followers, and the global community.'
},{
    image:img4,
    heading:'Deforum',
    para:'Unleash the power of image creation with ease. Produce stunning visuals and graphics.'
},{
    image:img5,
    heading:'ControlNet',
    para:'Elevate your images to the next level using cutting-edge AI tools and a wide range of artistic filters. '
},{
    image:img6,
    heading:'Alaas (Coming Soon)',
    para:'Easily share your visual creations with friends, followers, and the global community.'
}]

const Section2 = () => {

    const MediumPoppins ={
        fontFamily:'Poppins, sans-serif',
        fontWeight:'600'
    }
    const RegularPoppins={
        fontFamily:'Poppins, sans-serif',
        fontWeight:'400'
    }

  return (
   <div className=' flex justify-center items-center relative lg:bottom-[3rem] md:bottom-[1.5rem]'>
        <div className='grid lg:grid-rows-2 md:grid-rows-3 grid-rows-6 grid-flow-col gap-4 transperant-black w-[80%] lg:p-[5rem] md:p-[3rem] sm:p-[2rem] w-[85%]'>
            {fields.map((field)=>{
                return(
                <Fade bottom>
                    <div className='lg:m-[1rem] m-[2rem]  md:m-[0.8rem] flex flex-col gap-[1rem]'>
                        <h1 className='text-white flex gap-[1rem] items-center' style={{...MediumPoppins}} ><img src={field.image} className='h-auto lg:w-[1.9rem] md:w-[23px]'/> {field.heading}</h1>
                        <p className='text-white font-normal md:text-[14px] lg:text-[0.8rem] text-[#CBCBCB] medium-pup' style={{...RegularPoppins}}>{field.para}</p>
                    </div>
                </Fade>
                )
            })}
        </div>
   </div>
  )
}

export default Section2