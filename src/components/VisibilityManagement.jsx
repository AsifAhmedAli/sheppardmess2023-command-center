import React from 'react'
import { TbTriangleFilled } from 'react-icons/tb';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

const VisibilityManagement = () => {
  return (
    <>
      <div className='p-5'>
        <h1 className='text-[24px] text-[#E3E3E3] leading-[31.25px] font-medium'>Vulnerability Management </h1>
        <div className='flex pt-5 px-50'>
        <div className='flex flex-col items-center '>
          <h1 className='text-[16px] text-[#E3E3E3] leading-[20.83px] font-medium'>Remediation SLA</h1>
          <h1 className='text-[20px] text-[#FF0000] leading-[26.04px] font-medium my-5'>59</h1>
          <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#16E32B] bg-[#131313]'>
            <p className=''>+0.03%</p>
            <TbTriangleFilled className='leading-4' size={12} />
          </div>
        </div>
        <div className='w-[1px] h-[115px] bg-[#B8B8B8] mx-20'></div>
        {/* 2nd */}
        <div className='flex flex-col items-center '>
          <h1 className='text-[16px] text-[#E3E3E3] leading-[20.83px] font-medium'>Risk Accept </h1>
          <h1 className='text-[20px] text-[#FF0000] leading-[26.04px] font-medium my-5'>655</h1>
          <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#ACBF38] bg-[#131313]'>
            <p className=''>+0.03%</p>
            <TbTriangleFilled className='leading-4' size={12} />
          </div>
        </div>
        <div className='w-[1px] h-[115px] bg-[#B8B8B8] mx-20'></div>
        {/* 3rd one */}
        <div className='flex flex-col items-center '>
          <h1 className='text-[16px] text-[#E3E3E3] leading-[20.83px] font-medium'>Risk Eccept</h1>
          <h1 className='text-[20px] text-[#FF0000] leading-[26.04px] font-medium my-5'>128</h1>
          <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#16E32B] bg-[#131313]'>
            <p className=''>+0.03%</p>
            <TbTriangleFilled className='leading-4' size={12} />
          </div>
        </div>
        <div className='w-[1px] h-[115px] bg-[#B8B8B8] mx-20'></div>
        {/* 4th one */}
        <div className='flex flex-col items-center '>
          <h1 className='text-[16px] text-[#E3E3E3] leading-[20.83px] font-medium'>False Positive Audit</h1>
          <h1 className='text-[20px] text-[#FF0000] leading-[26.04px] font-medium my-5'>128</h1>
          <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#ACBF38] bg-[#131313]'>
            <p className=''>+0.03%</p>
            <TbTriangleFilled className='leading-4' size={12} />
          </div>
        </div>
      
        </div>
      
      </div>
    </>
  )
}

export default VisibilityManagement