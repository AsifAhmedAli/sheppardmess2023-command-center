
import React from 'react';
import ApexCharts from 'apexcharts';
import { TbTriangleFilled } from 'react-icons/tb';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

const Top5Activity = () => {
  // Options for ApexChart
  const chartOptions = [
    {
      name: 'activityChart1',
      data: [10,15,10,12,15,20,25,25,40,35,45,25,45,55,30,45,35,55,60,65,70,65,70,75,65,85,65,90,95,100,90,85,90,100,105,110,90,110],
      color: '#16E32B',
    },
    {
      name: 'activityChart2',
      data: [10,15,10,12,15,20,25,25,40,35,45,25,45,55,30,45,35,55,60,65,70,65,70,75,65,85,65,90,95,100,90,85,90,100,105,110,90,110],
      color: '#16E32B',
    },
    {
      name: 'activityChart3',
      data: [10,15,10,12,15,20,25,25,40,35,45,25,45,55,30,45,35,55,60,65,70,65,70,75,65,85,65,90,95,100,90,85,90,100,105,110,90,110],
      color: '#FE0000',
    },
    {
      name: 'activityChart4',
      data: [10,15,10,12,15,20,25,25,40,35,45,25,45,55,30,45,35,55,60,65,70,65,70,75,65,85,65,90,95,100,90,85,90,100,105,110,90,110],
      color: '#FE0000',
    },
    {
      name: 'activityChart5',
      data: [10,15,10,12,15,20,25,25,40,35,45,25,45,55,30,45,35,55,60,65,70,65,70,75,65,85,65,90,95,100,90,85,90,100,105,110,90,110],
      color: '#16E32B',
    }
  ];

  // Generate ApexCharts after component mount
React.useEffect(() => {
  const charts = chartOptions.map((option) => {
    const chart = new ApexCharts(document.querySelector(`#${option.name}`), {
      chart: {
        width: 116.65,
        height: 46.85,
        type: 'line',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        },
      },
      series: [{
        name: 'series1',
        data: option.data
      }],
      colors: [option.color],
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2,
        colors: option.color === '#16E32B' ? ['#16E32B'] : ['#FF0000'],
      },
      fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 0.7,
            inverseColors: false,
            opacityFrom: 0.9,
            opacityTo: 1,
            stops: [90],
          },
        },
      xaxis: {
        labels: {
          show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      enabled: true,
    }
  });
  chart.render();
  return chart;
});
// cleanup function to destroy previous charts
return () => {
  charts.forEach((chart) => {
    chart.destroy();
  });
};
}, []);

  
  return (
  <>
  <div className="bg-[#181A25] rounded-xl w-[468px] h-[623px] px-4">
  <div className='flex flex-col'>
  <h2 className="text-[24px] leading-8 font-medium mb-2 mt-5 text-[#E3E3E3]">Top Activity</h2>
  <div className='flex justify-between'>
  <div className="mt-2 px-3">
  <span className="text-[18px] leading-4 font-medium mr-2 text-[#AEB6CE]">XPEV</span>
  <p className="text-[#E3E3E3] text-[18px] leading-4 font-medium mt-3">350.4 <span className='text-[#AEB6CE]'>EUR</span></p>
  </div>
  <div className="mt-2 px-3">
  <div id='activityChart1'></div>
  <div className='flex items-center justify-end text-[#16E32B]'>
  <p className="text-[18px] leading-4 font-medium mr-2 ">+0.03%</p>
  <TbTriangleFilled className='leading-4' size={12} />
  </div>
  </div>
  </div>
  <hr className='my-5 border-[#FFFFFF14]' />
  <div className='flex justify-between'>
  <div className="px-3">
  <span className="text-[18px] leading-4 font-medium mr-2 text-[#AEB6CE]">XPEV</span>
  <p className="text-[#E3E3E3] text-[18px] leading-4 font-medium mt-3">350.4 <span className='text-[#AEB6CE]'>EUR</span></p>
  </div>
  <div className="mt-2 px-3">
  <div id='activityChart2'></div>
  <div className='flex items-center justify-end text-[#16E32B]'>
  <p className="text-[18px] leading-4 font-medium mr-2 ">-0.1%</p>
  <TbTriangleInvertedFilled className='leading-4' size={12} />
  </div>
  </div>
  </div>
  <hr className='my-4 border-[#FFFFFF14]' />
  <div className='flex justify-between'>
  <div className="px-3">
  <span className="text-[18px] leading-4 font-medium mr-2 text-[#AEB6CE]">XPEV</span>
  <p className="text-[#E3E3E3] text-[18px] leading-4 font-medium mt-3">350.4 <span className='text-[#AEB6CE]'>EUR</span></p>
  </div>
  <div className="mt-2 px-3">
  <div id='activityChart3'></div>
  <div className='flex items-center justify-end text-[#FE0000]'>
  <p className="text-[18px] leading-4 font-medium mr-2 ">-0.4%</p>
  <TbTriangleInvertedFilled className='leading-4' size={12} />
          </div>
        </div>
      </div>
      <hr className='my-4 border-[#FFFFFF14]' />
      <div className='flex justify-between'>
      <div className="px-3">
  <span className="text-[18px] leading-4 font-medium mr-2 text-[#AEB6CE]">XPEV</span>
  <p className="text-[#E3E3E3] text-[18px] leading-4 font-medium mt-3">350.4 <span className='text-[#AEB6CE]'>EUR</span></p>
  </div>
        <div className="mt-2 px-3">
          <div id='activityChart4'></div>
          <div className='flex items-center justify-end text-[#FE0000]'>
            <p className="text-[18px] leading-4 font-medium mr-2 ">+0.6%</p>
            <TbTriangleFilled className='leading-4' size={12} />
          </div>
        </div>
      </div>
      <hr className='my-4 border-[#FFFFFF14]' />
      <div className='flex justify-between'>
      <div className="px-3">
  <span className="text-[18px] leading-4 font-medium mr-2 text-[#AEB6CE]">XPEV</span>
  <p className="text-[#E3E3E3] text-[18px] leading-4 font-medium mt-3">350.4 <span className='text-[#AEB6CE]'>EUR</span></p>
  </div>
        <div className="mt-2 px-3">
          <div id='activityChart5'></div>
          <div className='flex items-center justify-end text-[#16E32B]'>
            <p className="text-[18px] leading-4 font-medium mr-2 ">+0.6%</p>
            <TbTriangleFilled className='leading-4' size={12} />
          </div>
        </div>
      </div>
    </div>
  </div>
</>
)
}

export default Top5Activity;



