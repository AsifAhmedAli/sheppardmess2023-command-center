import React from 'react'
import Header from '../../components/Header'
import DefaultLayout from '../../layout/DefaultLayout'
import image1 from '../../images/integrations/image1.png'
import image2 from '../../images/integrations/image2.png'
import image3 from '../../images/integrations/image3.png'
import image4 from '../../images/integrations/image4.png'
import image5 from '../../images/integrations/image5.png'
import image6 from '../../images/integrations/image6.png'
import image7 from '../../images/integrations/image7.png'
import image8 from '../../images/integrations/image8.png'
import image9 from '../../images/integrations/image9.png'
import image10 from '../../images/integrations/image10.png'
import image11 from '../../images/integrations/image11.png'
import image12 from '../../images/integrations/image12.png'
import image13 from '../../images/integrations/image13.png'
import image14 from '../../images/integrations/image14.png'
import image15 from '../../images/integrations/image15.png'
import image16 from '../../images/integrations/image16.png'
import image17 from '../../images/integrations/image17.png'
import image18 from '../../images/integrations/image18.png'
import image19 from '../../images/integrations/image19.png'
import image20 from '../../images/integrations/image20.png'


const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20
];

const Integrations = () => {
  return (
    <>
    <DefaultLayout>
      {/* Header start */}
   <div className='flex flex-col'>
   <div className='w-[1538px] flex items-center justify-between pt-5'>
      <div>
        <h1 className='text-[#FFFFFF] text-[40px] font-bold leading-[48px]'>Integrations</h1>
        <p className='text-[#C3C3C3] text-[20px] font-medium leading-[30px] capitalize'>Here’s your burnout assessment overview</p>
      </div>
     
    <div className="flex items-center">
   <Header />
    </div>
    </div>
     <div className='flex items-center bg-transparent border border-[#C3C3C3] w-[252px] h-[45px] p-2 rounded-[3px] mr-3 my-5 '>
   <input
        type="text"
        placeholder="Search"
        className=" w-[341px] h-[44px] rounded-[12px] p-2 focus:outline-none bg-transparent placeholder:text-white text-white"
      />
      <img src="./icons/search.png" alt="Search icon" className="" />
   </div>
   <h1 className='text-[24px] text-[#E3E3E3] leading-[31.25px] font-medium'>All Integrations</h1>
   <div className='w-[1540px] h-[723px] bg-[#13141B] rounded-xl mt-5 p-7'>
    <div className='grid grid-cols-5 gap-4'>
    {images.map((image, index) => (
        <div key={index} className='w-[293px] h-[149px] rounded-xl bg-[#181A25] p-3'>
          <div className='flex justify-end'>
            <div className='w-[20px] h-[20px] text-[#FFFFFF] rounded-full border border-[#FFFFFF] flex items-center justify-center hover:w-[22px] hover:h-[22px] duration-500'>
            <button>+</button>
            </div>
          </div>
          <div className='flex justify-center'>
            <img src={image} alt="" className='w-[128px] h-[76px] object-contain' />
          </div>
        </div>
      ))}

{/* <div className='w-[293px] h-[149px] rounded-xl bg-[#181A25] p-3'>
<div className='flex justify-end'>
  <div className='w-[20px] h-[20px] text-[#FFFFFF] rounded-full border border-[#FFFFFF] flex items-center justify-center hover:w-[22px] hover:h-[22px] duration-500'>
    <button>+</button>
  </div>
</div>
<div className='flex justify-center'>
  <img src={image1} alt="" className='w-[128px] h-[76px]' />
</div>
</div> */}




    </div>

   </div>

      </div>
     
    </DefaultLayout>
    </>
  )
}

export default Integrations