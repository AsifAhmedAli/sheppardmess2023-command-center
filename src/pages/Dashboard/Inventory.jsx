import React from 'react'
import Header from '../../components/Header'
import DefaultLayout from '../../layout/DefaultLayout'
import { DatePicker } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import InventoryChart from '../../components/InventoryChart';
import InventoryTable from '../../components/InventoryTable';



const Inventory = () => {
    const placeholderStyles = {
        color: '#fff',
        opacity: '1',
    };


    return (
        <>
            <DefaultLayout>
                {/* Header start */}
                <div className='flex flex-col'>
                    <div className='w-[1528px] flex items-center justify-between pt-5'>
                        <div>
                            <h1 className='text-[#FFFFFF] text-[40px] font-bold leading-[48px]'>Inventory</h1>
                            <p className='text-[#C3C3C3] text-[20px] font-medium leading-[30px] capitalize'>Here’s your burnout assessment overview</p>
                        </div>

                        <div className="flex items-center">
                            <Header />
                        </div>
                    </div>
                    {/* below header part start */}
                    <div className='flex items-center gap-5 mt-5'>

                        <div className="relative w-[250px] h-[45px]  bg-transparent rounded-[3px] px-[16px] py-[10px]">

                            <label htmlFor="time" className='text-white'>
                                Time Range
                            </label>
                            <DatePicker
                                id="time"
                                className="bg-transparent px-10 text-16 font-normal leading-22 w-[250px] h-[45px] border border-[#C3C3C3] rounded-[3px] py-[10px] text-white placeholder-white absolute bottom-0 right-0"
                                suffixIcon={<CalendarOutlined className="text-white" />}
                                inputPrefixCls="ant-input"
                                dropdownClassName="bg-gray-700"
                                style={{ color: '#fff' }}
                            />
                        </div>


                        <div className='w-[250px] h-[45px] border border-[#C3C3C3] bg-transparent rounded-[3px] px-[12px] py-[10px]'>
                            <select name="" id="" className='bg-transparent outline-none focus:outline-none px-[12px] text-[#FFFFFF] text-[16px] font-normal leading-[22px]'>
                                <option value="">Status (last 30 days)</option>
                            </select>
                        </div>
                        <div className='flex items-center bg-transparent border border-[#C3C3C3] w-[253px] h-[45px] p-2 pr-5 rounded-[3px] mr-3 my-5 '>
                            <input
                                type="text"
                                placeholder="Search"
                                className=" w-[341px] h-[44px] rounded-[12px] p-2 focus:outline-none bg-transparent placeholder:text-white text-white"
                            />
                            <img src="./icons/search.png" alt="Search icon" className="" />
                        </div>
                    </div>

                    {/* below header part end */}
                    <div className='w-[1528px] h-[199px] rounded-xl bg-[#13141B] pt-4 pl-4'>
                        <div className='flex '>
                            <div className='w-[315px] h-[159px] bg-[#181A25] rounded-xl flex items-center justify-center '>

                                <div className='-ml-8 mt-5'>
                                    <img src="./icons/result.png" alt="Rraph icon" className='flex-shrink-0 w-[110px] h-[110px]  ' />
                                </div>

                                <div>
                                    <h1 className='text-[#FFFFFF] text-[22px] leading-[28.64px] font-bold'>410</h1>
                                    <h1 className='text-[#FFFFFF] text-[18px] leading-[23.44px] font-normal'>Active Applications</h1>
                                </div>

                            </div>
                            {/* 2nd */}
                            <div className='w-[298px] h-[163px] bg-[#181A25] rounded-xl flex items-center  mx-5'>

                                <div className='ml-6 mt-6'>
                                    <img src="./icons/secured.png" alt="Rraph icon" className='flex-shrink-0]  ' />
                                </div>

                                <div>
                                    <h1 className='text-[#FFFFFF] text-[22px] leading-[28.64px] font-bold'>2772</h1>
                                    <h1 className='text-[#FFFFFF] text-[19px] leading-[24.74px] font-normal'>Updates</h1>
                                </div>

                            </div>
                            {/* chart */}
                            <div className='flex flex-col items-center'>
                                <h1 className='text-[#E3E3E3] text-[16px] leading-[20.83px] font-medium'>Asset Risk Grade Percent</h1>
                                <InventoryChart />
                            </div>
                            <div className='flex flex-col items-center justify-evenly ml-8'>
                                <h1 className='text-[#A9A9A9] text-[14px] leading-[18.23px] font-medium'>Total Days</h1>
                                <h1 className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium'>2 Days</h1>
                                <h1 className='text-[#FFFFFF] text-[13.71pxpx] leading-[16.76px] font-bold bg-[#FF0000] rounded-[2.29px] py-[8px] px-[12px] mb-5'>CRITICAL</h1>
                            </div>
                            <div className='w-[1px] h-[75px] border border-[#B8B8B8] mt-4 mx-14'></div>
                            <div className='flex flex-col items-center justify-evenly'>
                                <h1 className='text-[#A9A9A9] text-[14px] leading-[18.23px] font-medium'>Total Days</h1>
                                <h1 className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium'>28 Days</h1>
                                <h1 className='text-[#FFFFFF] text-[13.71pxpx] leading-[16.76px] font-bold bg-[#F98A1E] rounded-[2.29px] py-[8px] px-[12px] mb-5'>HIGH</h1>
                            </div>
                            <div className='w-[1px] h-[75px] border border-[#B8B8B8] mt-4 mx-14'></div>
                            <div className='flex flex-col items-center justify-evenly'>
                                <h1 className='text-[#A9A9A9] text-[14px] leading-[18.23px] font-medium'>Total Days</h1>
                                <h1 className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium'>94 Days</h1>
                                <h1 className='text-[#FFFFFF] text-[13.71pxpx] leading-[16.76px] font-bold bg-[#F9B700] rounded-[2.29px] py-[8px] px-[12px] mb-5'>MEDIUM</h1>
                            </div>

                        </div>
                    </div>
                    {/* table component*/}
                    <h1 className='text-[#E3E3E3] text-[24px] leading-[31.25px] font-medium my-4'>Created Applications</h1>
                    <InventoryTable />
                    

                    <div>


                    </div>
                </div>

            </DefaultLayout>
        </>
    )
}

export default Inventory

