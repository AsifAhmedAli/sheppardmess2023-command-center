// import React from 'react';

// const CardThree = () => {
//   return (
//     <div className='w-[293px] h-[149px] bg-[#181A25] rounded-xl border border-stroke  py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-[#181A25]'>
//       <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
//         <svg
//           className='fill-primary dark:fill-white'
//           width='22'
//           height='22'
//           viewBox='0 0 22 22'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             d='M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z'
//             fill=''
//           />
//           <path
//             d='M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z'
//             fill=''
//           />
//         </svg>
//       </div>

//       <div className='mt-4 flex items-end justify-between'>
//         <div>
//           <h4 className='text-title-md font-bold text-black dark:text-white'>
//             2.450
//           </h4>
//           <span className='text-sm font-medium'>Total Product</span>
//         </div>

//         <span className='flex items-center gap-1 text-sm font-medium text-meta-3'>
//           2.59%
//           <svg
//             className='fill-meta-3'
//             width='10'
//             height='11'
//             viewBox='0 0 10 11'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               d='M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z'
//               fill=''
//             />
//           </svg>
//         </span>
//       </div>
//     </div>
//   )
// }

// export default CardThree;
import React from 'react';
import ApexCharts from 'apexcharts';
import {FaGreaterThan} from 'react-icons/fa'

const CardThree = () => {

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
        gradientToColors: ['#F6543E'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0,
        stops: [0, 105]
      }
    },
    colors: ['#F6543E'],
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
    const chart = new ApexCharts(document.querySelector('#chart2'), options);
    chart.render();
  }, []);

  return (
    <>
    <div className='w-[293px] h-[149px] bg-[#181A25] rounded-xl border border-stroke py-6  shadow-default dark:border-strokedark dark:bg-[#181A25]'>
      <div className='flex items-end justify-between px-3'>
        <div>
          <h4 className='text-[18px] font-medium leading-4 text-white dark:text-white mb-2'>
            High
          </h4>
          <span className='text-[18px] leading-4 font-medium'>1360</span>
        </div>

        <div id='chart2'></div>
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

export default CardThree;

