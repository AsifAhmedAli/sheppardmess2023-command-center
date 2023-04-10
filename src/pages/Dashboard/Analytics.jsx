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

const Analytics = () => {
  return (
    <DefaultLayout>
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
      <div className=''>
      <MeanTimeToResolution />
      </div>
     
    </DefaultLayout>
  )
}

export default Analytics;
