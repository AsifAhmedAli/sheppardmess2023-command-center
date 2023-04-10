// import React from 'react'

// const Coverage = () => {
//   return (
//     <>
//         <div className='bg-[#181A25] w-[611px] h-[201px] rounded-xl mt-5 px-4'>
//             <h1 className='mt-5 text-[24px] leading-[31.25px] font-medium text-[#E3E3E3]'>Coverage</h1>
            
//            <div className='flex justify-between'>
//            <div>
//            <h1 className='text-[#FFFFFF] mt-2 text-[16px] leading-6 font-normal'>SCA</h1>
//                <p>chart</p>
          
//                 <h1 className='text-[#FFFFFF] mt-2 text-[16px] leading-6 font-normal'>SCA</h1>
//                <p>chart</p>
//            </div>
//            <div>
//            <h1 className='text-[#FFFFFF] mt-2 text-[16px] leading-6 font-normal'>SCA</h1>
//                <p>chart</p>
          
//                 <h1 className='text-[#FFFFFF] mt-2 text-[16px] leading-6 font-normal'>SCA</h1>
//                <p>chart</p>
//            </div>
//            </div>
           
//         </div>
//     </>
//   )
// }

// export default Coverage


import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const HighRisk = () => {
  return (
    <>
        <div className='bg-[#181A25] w-[611px] h-[201px] rounded-xl mt-5 px-4'>
            <h1 className='mt-5 text-[24px] leading-[31.25px] font-medium text-[#E3E3E3]'>High Risk Vunererablillties</h1>
            <div className='flex justify-evenly items-end'>
            <div className='mt-12'>
                <h1 className='text-[#A9A9A9] text-[14px] font-medium leading-[18.23px] my-3'>Total Open</h1>
                <h1 className='text-[#E3E3E3] text-[20px] font-medium leading-[26.04px]'>$75,124</h1>
            </div>
            <div className='w-[1px] h-[60px] bg-[#B8B8B8]'></div>
            <div className='mt-12'>
                <h1 className='text-[#A9A9A9] text-[14px] font-medium leading-[18.23px] my-3'>Total New</h1>
                <h1 className='text-[#E3E3E3] text-[20px] font-medium leading-[26.04px]'>$15,478</h1>
            </div>
            <div className='w-[1px] h-[60px]  bg-[#B8B8B8]'></div>
            <div className='mt-12'>
                <h1 className='text-[#A9A9A9] text-[14px] font-medium leading-[18.23px] my-3'>Total Resolved</h1>
                <h1 className='text-[#E3E3E3] text-[20px] font-medium leading-[26.04px]'>$75,124</h1>
            </div>
            </div>
        </div>
    </>
  )
}

export default HighRisk
