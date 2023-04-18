
import React from 'react';
import ApexCharts from 'apexcharts';
import {FaGreaterThan} from 'react-icons/fa'

const CardTwo = () => {

  // Options for ApexChart
  const options = {
    chart: {
      width: 118.05,
      height: 52,
      type: 'area',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
    },
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100,32,35,45,50,50,52,60,65,70,62,80,85,90,100,90,31, 40, 28, 51, 42, 109, 100,32,35,45,50,50,52,60,65,70,62,80,85,90,100,90]
    }],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: ['#F50000'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0,
        stops: [0, 105]
      }
    },
    colors: ['#F50000'],
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
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
  };

  // Generate ApexChart after component mount
  React.useEffect(() => {
    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
    // Cleanup function to destroy chart instance
  return () => {
    chart.destroy();
  };
  }, []);

  return (
    <>
    <div className='w-[293px] h-[149px] bg-[#181A25] rounded-xl border border-stroke py-6  shadow-default dark:border-strokedark dark:bg-[#181A25]'>
      <div className='flex items-end justify-between px-3'>
        <div>
          <h4 className='text-[18px] font-medium leading-4 text-white dark:text-white mb-2'>
            Critical
          </h4>
          <span className='text-[18px] leading-4 font-medium'>79</span>
        </div>

        <div id='chart'></div>
      </div>
      {/* <hr className='bg-[#FFFFFF14] mt-2' /> */}
      <div style={{ borderTop: '1px solid #FFFFFF14', marginTop: '15px' }}></div>
      <div className='px-3 mt-3 flex items-center justify-between'>
        <div className='flex items-center'>
          <FaGreaterThan style={{ marginRight: '5px' }} />
          <p className='text-[18px] leading-6 font-medium text-white'>120 Days</p>
        </div>
        <p className='text-[18px] leading-6 font-medium text-[#AEB6CE] ml-auto'>50</p>
      </div>
    </div>
    
    </>
  )
}

export default CardTwo;
