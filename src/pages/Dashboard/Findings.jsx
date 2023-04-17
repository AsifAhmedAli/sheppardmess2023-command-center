import React from 'react'
import Header from '../../components/Header'
import DefaultLayout from '../../layout/DefaultLayout'
import FindingsTable from '../../components/FindingsTable'



const Findings = () => {

  return (
    <>
    <DefaultLayout>
      {/* Header start */}
   <div className='flex flex-col'>
   <div className='w-[1538px] flex items-center justify-between pt-5'>
      <div>
        <h1 className='text-[#FFFFFF] text-[40px] font-bold leading-[48px]'>Findings</h1>
        <p className='text-[#C3C3C3] text-[20px] font-medium leading-[30px] capitalize'>Here’s your burnout assessment overview</p>
      </div>
     
    <div className="flex items-center">
   <Header />
    </div>
    </div>
    <div className='flex items-center justify-between mt-7'>
    <div className='w-[250px] h-[45px] border border-[#C3C3C3] bg-transparent rounded-[3px] px-[16px] py-[10px]'>
    <select name="" id="" className='bg-transparent outline-none focus:outline-none pr-15 text-[#FFFFFF] text-[16px] font-normal leading-[22px]'>
        <option value="">Select Saved Filter</option>
    </select>
    </div>
    <div className=''>
        <button className='bg-[#13141B] mr-2 bg-opacity-70 rounded-[4px] w-[119px] h-[42px] py-[10px] px-[16px] text-[#FFFFFF] text-[18px] leading-[22px] font-bold'>Apply</button>
        <button className='bg-[#70D0D8] rounded-[4px] w-[119px] h-[42px] py-[10px] px-[16px] text-[#FFFFFF] text-[18px] leading-[22px] font-bold'>Save</button>
       
    </div>

    </div>
    <div className='w-[1154px] h-[40px] rounded-md p-[6px] bg-[#13141B] mt-5'>
    <div className='flex items-center justify-around '>
        <p className=' cursor-pointer text-[18px] text-[#464F60] hover:text-white  hover:bg-[#464F60] hover:rounded-md hover:p-1 duration-300  leading-[20px] font-bold '>2407 Vulnerabilities</p>
        <div className='h-[16px] w-[1px] bg-[#1E2531] ml-1'></div>
        <p className=' cursor-pointer text-[18px] text-[#464F60] hover:text-white  hover:bg-[#464F60] hover:rounded-md hover:p-1 duration-300  leading-[20px] font-bold '>1134 Unreviewed</p>
        <div className='h-[16px] w-[1px] bg-[#1E2531] ml-1'></div>
        <p className=' cursor-pointer text-[18px] text-[#464F60] hover:text-white  hover:bg-[#464F60] hover:rounded-md hover:p-1 duration-300  leading-[20px] font-bold '>153 Ignored</p>
        <div className='h-[16px] w-[1px] bg-[#1E2531] ml-1'></div>
        <p className=' cursor-pointer text-[18px] text-[#464F60] hover:text-white  hover:bg-[#464F60] hover:rounded-md hover:p-1 duration-300  leading-[20px] font-bold '>403 False Positive</p>
        <div className='h-[16px] w-[1px] bg-[#1E2531] ml-1'></div>
        <p className=' cursor-pointer text-[18px] text-[#464F60] hover:text-white  hover:bg-[#464F60] hover:rounded-md hover:p-1 duration-300  leading-[20px] font-bold '>714 Verified</p>
        <div className='h-[16px] w-[1px] bg-[#1E2531] ml-1'></div>
        <p className=' cursor-pointer text-[18px] text-[#464F60] hover:text-white  hover:bg-[#464F60] hover:rounded-md hover:p-1 duration-300  leading-[20px] font-bold '>3 Remediated</p>
        <div className='h-[16px] w-[1px] bg-[#1E2531] ml-1'></div>
        <p className=' cursor-pointer text-[18px] text-[#464F60] hover:text-white  hover:bg-[#464F60] hover:rounded-md hover:p-1 duration-300  leading-[20px] font-bold '>0 Duplicate</p>
        <div className='h-[16px] w-[1px] bg-[#1E2531] ml-1'></div>
        <p className=' cursor-pointer text-[18px] text-[#464F60] hover:text-white  hover:bg-[#464F60] hover:rounded-md hover:p-1 duration-300  leading-[20px] font-bold '>111 New</p>
        <div className='h-[16px] w-[1px] bg-[#1E2531] ml-1'></div>

    </div>
    </div>
   </div>
   {/* Findings Table Component*/}
   <div className=''>
    <FindingsTable />
   </div>
   
    </DefaultLayout>
    </>
  )
}

export default Findings