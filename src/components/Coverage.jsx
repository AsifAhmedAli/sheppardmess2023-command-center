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

const Coverage = () => {
  return (
    <>
        <div className='bg-[#181A25] w-[611px] h-[201px] rounded-xl mt-5 px-4'>
            <h1 className='mt-5 text-[24px] leading-[31.25px] font-medium text-[#E3E3E3]'>Coverage</h1>
            
           <div className='flex justify-between'>
           <div>
           <h1 className='text-[#FFFFFF] mt-2 mb-4 text-[16px] leading-6 font-normal'>SCA</h1>
           <ProgressBar
                  completed={80}
                  bgColor="#5661D2"
                  baseBgColor="#434655"
                  height="10px"
                  width="195px"
                  gap="80px"
                  isLabelVisible={false}
                />
          
                <h1 className='text-[#FFFFFF] mt-4 mb-4 text-[16px] leading-6 font-normal'>DAST</h1>
                <ProgressBar
                  completed={80}
                  bgColor="#F5F7E0"
                  baseBgColor="#434655"
                  height="10px"
                  width="195px"
                  gap="80px"
                  isLabelVisible={false}
                />
           </div>
           <div>
           <h1 className='text-[#FFFFFF] mt-2 mb-4 text-[16px] leading-6 font-normal'>SAST</h1>
           <ProgressBar
                  completed={80}
                  bgColor="#F1A94A"
                  baseBgColor="#434655"
                  height="10px"
                  width="195px"
                  gap="80px"
                  isLabelVisible={false}
                />
          
                <h1 className='text-[#FFFFFF] mt-4 mb-4 text-[16px] leading-6 font-normal'>WAF</h1>
                
                   <ProgressBar
                  completed={80}
                  bgColor="#2B9AA1"
                  baseBgColor="#434655"
                  height="10px"
                  width="195px"
                  gap="80px"
                  isLabelVisible={false}
                />
           </div>
           </div>
           
        </div>
    </>
  )
}

export default Coverage
