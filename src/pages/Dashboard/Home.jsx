import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import CardOne from '../../components/CardOne';
import CardTwo from '../../components/CardTwo';
import CardThree from '../../components/CardThree'
import CardFour from '../../components/CardFour';
import ChatCard from '../../components/ChatCard';
import TableOne from '../../components/TableOne'
import ChartOne from '../../components/ChartOne';
import ChartTwo from '../../components/ChartTwo';
import Top5Activity from '../../components/Top5Activity';
import ChartThree from '../../components/ChartThree';
import MapOne from '../../components/MapOne'
import ProductionReadliness from '../../components/ProductionReadliness';
import Coverage from '../../components/Coverage';
import HighRisk from '../../components/HighRisk';
import SoftwareSecuritySupply from '../../components/SoftwareSecuritySupply';
import MeanTimeToResolution from '../../components/MeanTimeToResolution';
import AttackSurface from '../../components/AttackSurface';
import Header from '../../components/Header';
import { HiOutlineFilter } from 'react-icons/hi';
import VisibilityManagement from '../../components/VisibilityManagement';
const Home = () => {
  return (
    <>
    <DefaultLayout>
      {/* Header start */}
   <div className='flex flex-col'>
   <div className='w-[1538px] flex items-center justify-between pt-5'>
      <div>
        <h1 className='text-[#FFFFFF] text-[40px] font-bold leading-[48px]'>Command Center</h1>
        <p className='text-[#C3C3C3] text-[20px] font-medium leading-[30px]'>Real time Cybersecurity Operation Platform</p>
      </div>
     
    <div className="flex items-center">
   <div className='flex items-center bg-[#13141B] w-[341px] h-[44px] p-2 rounded-[12px] mr-3  '>
   <input
        type="text"
        placeholder="Add filter"
        className=" w-[341px] h-[44px] rounded-[12px] p-2 focus:outline-none bg-[#13141B] placeholder:text-[#FFFFFF]"
      />
      <img src="./icons/filter.png" alt="Filter icon" className="" />
   </div>
   <Header />
    </div>
    </div>
    <div className='flex justify-end py-5'>
      <button className='text-[#FFFFFF] text-[16px] text-center leading-[22px] font-semibold bg-[#1EBFC9] rounded-[3px] p-[14px] gap-[5px]'>Download Reports</button>
    </div>
   </div>
   {/* Header End */}

      <div className='w-[1538px] h-[191px] flex justify-between'>
        <CardOne />
        <div className='w-[1018px] h-[191px] flex justify-around bg-[#13141B] items-center rounded-xl'>
          <CardTwo />
          <CardThree />
          <CardFour />
        </div>
      </div>

      {/* <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <ChatCard />
      </div> */}
      <div className='w-[1538px] flex justify-evenly'>
      <div className='flex flex-row gap-5.5 bg-[#13141B] w-[1151px] h-[661px] mt-5 rounded-xl p-5'>
        {/* <TableOne /> */}
        <Top5Activity />
        <div className='flex flex-col justify-around'>
      <ProductionReadliness />
        <Coverage />
        <HighRisk />
      </div>
      </div>
      <div className='ml-3  mt-5'>
      <SoftwareSecuritySupply />
      </div>
      </div>
      <div className='w-[1538px] h-[204px] bg-[#13141B] rounded-xl mt-5'>
      <VisibilityManagement />
      </div>
      <div className='w-[1538px] flex mt-5 justify-between'>
      <MeanTimeToResolution />
      <AttackSurface />

      </div>
     
    </DefaultLayout>
    </>
  )
}

export default Home;
