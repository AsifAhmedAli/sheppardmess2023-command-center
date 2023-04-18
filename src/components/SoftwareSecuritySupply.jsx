
import React from 'react'
import { FaLock } from 'react-icons/fa';
import { AiOutlineSafety } from 'react-icons/ai';


const SoftwareSecuritySupply = () => {
  return (
    <>
        <div className='w-[367px] h-[660px] rounded-xl bg-[#13141B] px-5'>
        <h1 className='text-[20px] leading-6 font-normal text-[#FFFFFF] py-5 px-2'>Software Security Supply Chain</h1>
        <div className='flex flex-col text-[18px] leading-6 font-normal text-[#FFFFFF]'>
        <div className='flex items-center justify-evenly'>
            <img src="/icons/shield.png" alt="shield Icon" className='w-[34px] h-[34px]' />
            <h1 style={{flexGrow: 1}} className=' ml-8'>Runtime projection & Monitoring</h1>
        </div>
        <div className='w-[1px] h-21 bg-[#FF0000] ml-4 mb-1'></div>
        <div className='flex items-center justify-evenly'>
            <img src="/icons/home.png" alt="Home Icon" className='w-[34px] h-[34px] text-[#FFFFFF]' />
            <h1 style={{flexGrow: 1}} className='ml-8'>Security Verification & testing</h1>
        </div>
        <div className='w-[1px] h-21 bg-[#FFA500] ml-4 mt-2'></div>
        <div className='flex items-center justify-evenly'>
            <img src="/icons/cart.png" alt="Cart Icon" className='w-[34px] h-[34px] text-[#FFFFFF]' />
            <h1 style={{flexGrow: 1}} className='ml-8'>Continuous Integration & Delivery</h1>
        </div>
        <div className='w-[1px] h-21 bg-[#008000] ml-4 my-1'></div>
        <div className='flex items-center justify-evenly'>
            <img src="/icons/code.png" alt="Code Icon" className='w-[34px] h-[34px] text-[#FFFFFF]' />
            <h1 style={{flexGrow: 1}} className='ml-8'>Source Code Protection</h1>
        </div>
        <div className='w-[1px] h-21 bg-[#FF0000] ml-4 my-1'></div>
        <div className='flex items-center justify-evenly'>
            <img src="/icons/design.png" alt="Design Icon" className='w-[34px] h-[34px] text-[#FFFFFF]' />
            <h1 style={{flexGrow: 1}} className='ml-8'>Design & Develop</h1>
        </div>
        </div>
        </div>
    </>
  )
}

export default SoftwareSecuritySupply

