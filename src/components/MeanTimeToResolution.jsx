// import React from 'react'
// import { TbTriangleFilled } from 'react-icons/tb';
// import { TbTriangleInvertedFilled } from 'react-icons/tb';
// import ApexCharts from 'apexcharts';


// const MeanTimeToResolution = () => {


//   return (
//     <>
//         <div className='w-[890px] h-[437px] rounded-xl bg-[#13141B] p-5'>
//             <div className='flex justify-between'>
//             <h1 className='text-[24px] leading-[31.24px] font-medium text-[#E3E3E3]'>Meantime to Resolution (MTTR)</h1>
//             <select name="" id="" className='bg-[#1B1B1B] border border-black w-[86px] h-[32px] text-[#A9A9A9] text-[12px] leading-[15.62] font-medium'>
//                 <option value="">Month</option>
//             </select>
//             </div>
//             <div className='flex justify-between'>
//             <div className=''>
//                 <h1 className='text-[A9A9A9] text-[14px] leading-[18.23px] font-medium mt-5 mb-3'>Total Open</h1>
//                 <div className='flex items-center'>
//                 <p className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium mr-6'>$75,124</p>
//                 <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#16E32B] bg-[#131313]'>
//                 <p className=''>+0.02%</p>
//                 <TbTriangleFilled className='leading-4' size={12} />
//                 </div>
//                 <div className='border w-[1px] h-18 -mt-8 ml-7 border-[#1B1B1B]'></div>
//                 </div>

//             </div>
//             <div>
//                 <h1 className='text-[A9A9A9] text-[14px] leading-[18.23px] font-medium mt-5 mb-3'>Total New</h1>
//                 <div className='flex items-center'>
//                 <p className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium mr-6'>$15,478</p>
//                 <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#FF9C40] bg-[#131313]'>
//                 <p className=''>+0.02%</p>
//                 <TbTriangleInvertedFilled className='leading-4' size={12} />
//                 </div>
//                 <div className='border w-[1px] h-18 -mt-8 ml-7 border-[#1B1B1B]'></div>
//                 </div>

//             </div>
//             <div>
//                 <h1 className='text-[A9A9A9] text-[14px] leading-[18.23px] font-medium mt-5 mb-3'>Total Open</h1>
//                 <div className='flex items-center'>
//                 <p className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium mr-6'>$75,124</p>
//                 <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#16E32B] bg-[#131313]'>
//                 <p className=''>+0.02%</p>
//                 <TbTriangleFilled className='leading-4' size={12} />
//                 </div>
//                 <div className='border w-[1px] h-18 -mt-8 ml-7 border-[#1B1B1B]'></div>
//                 </div>

//             </div>
//             <div>
//                 <h1 className='text-[A9A9A9] text-[14px] leading-[18.23px] font-medium mt-5 mb-3'>Total Open</h1>
//                 <div className='flex items-center'>
//                 <p className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium mr-6'>$75,124</p>
//                 <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#16E32B] bg-[#131313]'>
//                 <p className=''>+0.02%</p>
//                 <TbTriangleFilled className='leading-4' size={12} />
//                 </div>
//                 </div>

//             </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default MeanTimeToResolution

import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { TbTriangleFilled } from 'react-icons/tb';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

const MeanTimeToResolution = () => {

//     const chartRef = useRef(null);

// useEffect(() => {
//     const options = {
//         chart: {
//             type: 'line',
//             width: "100%",
//             height: 249,
//             toolbar: {
//                 show: false
//             }
//         },
//         series: [
//             {
//                 name: 'MTTR',
//                 data: [30, 36,  45, 64, 52, 59, 36, 39, 60],
               
//             },
//             {
//                 name: 'New Line',
//                 data: [3, 22,  13, 22, 21, 44, 22, 30, 35],    
                
//             }
            
//         ],
        
//         xaxis: {
//             type: 'category',
//             categories: [
//                 '17 jul',
//                 '18 jul',
//                 '19 jul',
//                 '20 jul',
//                 '21 jul',
//                 '22 jul',
//                 '23 jul',
//                 '24 jul',
//                 '25 jul',
//             ],
//             labels: {
//                 style: {
//                     fontSize: '12px',
//                     color: "#A9A9A9",
//                     lineHeight: "16px",
//                     fontWeight: 500,
//                 }
//             },
            
//             axisTicks: {
//                 show: false // add this line to remove vertical lines
//             },
//             tooltip: {
//                 x: {
//                     format: 'dd MMM yyyy'
//                 }
//             }
//         },
//         yaxis: {
//             show: false,
//             min: 0,
//             max: 65,
//         },
//         stroke: {
//             curve: 'smooth'
//         },
//         grid: {
//             show: false
//         },
//         colors: ['#F3AA4D', '#5281F8'] // Add another color for the new line
//     };

//     const chart = new ApexCharts(chartRef.current, options);
//     chart.render();

//     // add margin to the chart container
//     chartRef.current.style.marginBottom = "100px";

//     // return function to cleanup on unmount
//     return () => {
//         chart.destroy();
//     };
// }, []); // add empty dependency array to run effect only once

const chartRef = useRef(null);

useEffect(() => {
    const options = {
        chart: {
            type: 'line',
            width: "100%",
            height: 289,
            toolbar: {
                show: false
            },
            
            
        },
        series: [
            {
                name: 'MTTR',
                data: [30, 36,  45, 64, 52, 59, 36, 39, 60],
                
               
            },
            {
                name: 'New Line',
                data: [3, 22,  13, 22, 21, 44, 22, 30, 35], 
                   
                
            }
            
            
        ],
        
        xaxis: {
            type: 'category',
            categories: [
                '17 July',
                '18 July',
                '19 July',
                '20 July',
                '21 July',
                '22 July',
                '23 July',
                '24 July',
                '25 July',
            ],
            
            labels: {
                style: {
                    fontSize: '12px',
                    color: "#A9A9A9",
                    lineHeight: "16px",
                    fontWeight: 500,
                },
                
                
            },
            axisBorder: {
                show: true,
                color: '#1B1B1B',
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: false // add this line to remove vertical lines
            },
            
            tooltip: {
                enabled: true,
                formatter: undefined,
                offsetY: 0,
                style: {
                  fontSize: 0,
                  fontFamily: 0,
                },
            },
            offsetY: 0
        },
        yaxis: {
            show: false,
            min: 0,
            max: 65,
        },
        
        stroke: {
            curve: 'smooth'
        },
        grid: {
            show: false
        },
        colors: ['#F3AA4D', '#5281F8'],
        legend: {
            show: false
        }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // add margin to the chart container
    chartRef.current.style.marginBottom = "100px";

    // return function to cleanup on unmount
    return () => {
        chart.destroy();
    };
}, []); // add empty dependency array to run effect only once



    return (
        <>
            <div className='w-[890px] h-[437px] rounded-xl bg-[#13141B] p-5'>
                <div className='flex justify-between'>
                    <h1 className='text-[24px] leading-[31.24px] font-medium text-[#E3E3E3]'>Meantime to Resolution (MTTR)</h1>
                    <select name='' id='' className='bg-[#1B1B1B] border border-black w-[86px] h-[32px] text-[#A9A9A9] text-[12px] leading-[15.62] font-medium rounded-lg text-center' >
                        <option value='' >Month</option>
                    </select>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-[A9A9A9] text-[14px] leading-[18.23px] font-medium mt-5 mb-3'>Total Open</h1>
                        <div className='flex items-center'>
                            <p className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium mr-6'>$75,124</p>
                            <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#16E32B] bg-[#131313]'>
                                <p className=''>+0.02%</p>
                                <TbTriangleFilled className='leading-4' size={12} />
                            </div>
                            <div className='border w-[1px] h-18 -mt-8 ml-7 border-[#1B1B1B]' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[A9A9A9] text-[14px] leading-[18.23px] font-medium mt-5 mb-3'>Total New</h1>
                        <div className='flex items-center'>
                            <p className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium mr-6'>$15,478</p>
                            <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#FF9C40] bg-[#131313]'>
                                <p className=''>+0.02%</p>
                                <TbTriangleInvertedFilled className='leading-4' size={12} />
                            </div>
                            <div className='border w-[1px] h-18 -mt-8 ml-7 border-[#1B1B1B]' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[A9A9A9] text-[14px] leading-[18.23px] font-medium mt-5 mb-3'>Total Open</h1>
                        <div className='flex items-center'>
                            <p className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium mr-6'>$75,124</p>
                            <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#16E32B] bg-[#131313]'>
                                <p className=''>+0.02%</p>
                                <TbTriangleFilled className='leading-4' size={12} />
                            </div>
                            <div className='border w-[1px] h-18 -mt-8 ml-7 border-[#1B1B1B]' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[A9A9A9] text-[14px] leading-[18.23px] font-medium mt-5 mb-3'>Total Open</h1>
                        <div className='flex items-center'>
                            <p className='text-[#E3E3E3] text-[20px] leading-[26.04px] font-medium mr-6'>$75,124</p>
                            <div className=' flex justify-around rounded-lg items-center w-[76px] h-[30px] text-[12px] leading-[15.62px] font-medium text-[#16E32B] bg-[#131313]'>
                                <p className=''>+0.02%</p>
                                <TbTriangleFilled className='leading-4' size={12} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    ref={chartRef}
                    className=' w-full h-[249px] mt-2 bg-[url(./chartbg.png)] bg-auto bg-no-repeat bg-center'
                />
            </div>

        </>
    );
};
export default MeanTimeToResolution;
