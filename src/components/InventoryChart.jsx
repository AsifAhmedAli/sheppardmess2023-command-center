// import React, { useEffect, useRef } from "react";
// import ApexCharts from "apexcharts";

// const InventoryChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = new ApexCharts(chartRef.current, {
//       series: [2.4, 15.9, 15.9],
//       chart: {
//         type: "donut",
//         height: "230",
//         background: "transparent", 
//         animations: {
//           enabled: true, // disable animations
//         },
//         margin: 0,
//         dropShadow: {
//           enabled: false, // set the dropShadow.enabled to false
//         },
//       },
//       plotOptions: {
//         pie: {
//           donut: {
//             size: "50%",
//             labels: {
//               show: true,
//               total: {
//                 show: true,
//                 label: "1469",
//                 fontSize: "14px",
//                 color: "#FFFFFF",
//                 formatter: function (w) {
//                   return w.globals.seriesTotals.reduce((a, b) => {
//                     return a + b;
//                   }, 0);
//                 },
//               },
//               stroke: {
//                 show:true,
//                 width: 0,
//               },
//             },
           
//           },
          
//         },
//       },
//       labels: ["Critical", "High", "Medium",],
//       colors: ["#FF0000", "#F98A1E", "#F9B700",],
//     });
//     chart.render();
//     return () => chart.destroy();
//   }, []);

//   return <div ref={chartRef} />;
// };

// export default InventoryChart;




// import React, { useEffect, useRef } from 'react';
// import ApexCharts from 'apexcharts';

// const InventoryChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       chart: {
//         type: 'donut',
//         height: 210,
//       },
//       series: [2.4, 15.9, 15.9, 65.8],
//       labels: ['Critical', 'High', 'Medium'],
//       dataLabels: {
//         enabled: true,
//         distributed: true,
//         formatter: function(value) {
//           return value + '%';
//         },
//         style: {
//           colors: ['#FFFFFF'],
//           fontSize: '16px',
//           fontFamily: 'Roboto',
//           fontWeight: 500,
//         },
//       },
//       colors: ['#FF0000', '#F98A1E', '#F9B700'],
//       stroke: {
//         width: 0,
//       },
//       plotOptions: {
//         pie: {
//           donut: {
//             size: '90%',
//           },
//         },
//       },
//       tooltip: {
//         enabled: true,
//         y: {
//           formatter: function(value) {
//             return value + '%';
//           },
//         },
//       },
//       legend: {
//         show: false,
//       },
//     };

//     const chart = new ApexCharts(chartRef.current, options);
//     chart.render();

//     return () => {
//       chart.destroy();
//     };
//   }, []);

//   return (
//     <div
//       className="chart-container"
//       style={{ position: 'relative', height: '100%', padding: '50px' }}
//     >
//       <div
//         id="donut-chart"
//         ref={chartRef}
//         style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//       >
//         <div className="center-text">
//           <div className="inner-text">
//             <span className="value" style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 'bold' }}>1469</span>
//             <span className="label" style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 'bold' }}>Asset Risk Grade Percent</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InventoryChart;

// import React, { useEffect, useRef } from 'react';
// import ApexCharts from 'apexcharts';

// const InventoryChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       chart: {
//         type: 'donut',
//         height: 170,
//       },
//       series: [2.4, 15.9, 15.9, 65.8],
//       labels: ['Critical', 'High', 'Medium'],
//       dataLabels: {
//         enabled: true,
//         distributed: true,
//         formatter: function(value) {
//           return value + '%';
//         },
//         style: {
//           colors: ['#FFFFFF'],
//           fontSize: '16px',
//           fontFamily: 'Roboto',
//           fontWeight: 500,
//         },
//       },
//     //   colors: ['#00CE7D', '#F7931A', '#325C06','#FF4A7A'],
//       colors: ['#00CE7D', '#FF4A7A', '#325C06','#F7931A'],
//       stroke: {
//         width: 0,
//       },
//       plotOptions: {
//         pie: {
//           donut: {
//             size: '90%',
//           },
//         },
//       },
//       tooltip: {
//         enabled: true,
//         y: {
//           formatter: function(value) {
//             return value + '%';
//           },
//         },
//       },
//       legend: {
//         show: false,
//       },
//     };

//     const chart = new ApexCharts(chartRef.current, options);
//     chart.render();

//     return () => {
//       chart.destroy();
//     };
//   }, []);

//   return (
//     <div
//       id="donut-chart"
//       ref={chartRef}
//     />
//   );
// };

// export default InventoryChart;


// import React, { useEffect, useRef } from 'react';
// import ApexCharts from 'apexcharts';

// const InventoryChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       chart: {
//         type: 'donut',
//         height: 170,
//       },
//       series: [2.4, 15.9, 15.9, 65.8],
//       labels: ['Critical', 'High', 'Medium'],
//       dataLabels: {
//         enabled: true,
//         formatter: function(value) {
//           return value + '%';
//         },
//         style: {
//           colors: ['#000000'],
//           fontSize: '14px',
//           fontFamily: 'Roboto',
//           fontWeight: 500,
//           textShadow: 'none',
         
//         },
//         dropShadow: {
//           enabled: false,
//         },
//         background: {
//           enabled: false,
//         },
//       },
//       colors: ['#00CE7D', '#FF4A7A', '#325C06', '#F7931A'],
//       stroke: {
//                 width: 0,
                
//               },
//       plotOptions: {
//         pie: {
//           donut: {
//             size: '90%',
//             labels: {
//               show: true,
//               total: {
//                 show: true,
//                 showAlways: false,
//                 label: '1469',
//                 color: '#000000',
//                 formatter: function(w) {
//                   return (
//                     w.globals.seriesTotals.reduce((a, b) => {
//                       return a + b;
//                     }, 0).toFixed(1) + '%'
//                   );
//                 },
                
//               },
//               name: {
//                 show: true,
//                 fontSize: '18px',
//                 lineHeight:'18.23px',
//                 fontWeight: 500,
//                 color: 'white',
//                 offsetY: 10,
//               },
//               value: {
//                 show: false,
//                 fontSize: '28px',
//                 fontFamily: 'Roboto',
//                 fontWeight: 700,
//                 color: 'white',
//                 offsetY: 10,
//               },
//               formatter: function(val, opts) {
//                 const name = opts.w.globals.labels[opts.seriesIndex];
//                 const percent = val.toFixed(1);
//                 return (
//                   '<div class="donut-label">' +
//                   '<span class="name">' +
//                   name +
//                   '</span>' +
//                   '<span class="percent" style="color:#ffffff">' +
//                   percent +
//                   '%</span>' +
//                   '</div>'
//                 );
//               },
//               offsetY: 10,
//               offsetX: -15,
//               minAngleToShowLabel: 1,
//             },
            
//           },
//         },
//       },
//       tooltip: {
//         enabled: true,
//         y: {
//           formatter: function(value) {
//             return value + '%';
//           },
//         },
//       },
//       legend: {
//         show: false,
//       },
//     };

//     const chart = new ApexCharts(chartRef.current, options);
//     chart.render();

//     return () => {
//       chart.destroy();
//     };
//   }, []);

//   return <div id="donut-chart" ref={chartRef} />;
// };

// export default InventoryChart;


import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const InventoryChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'donut',
        height: 170,
        
        
      },
      series: [2.4, 15.9, 15.9, 65.8],
      labels: ['Critical', 'High', 'Medium'],
      dataLabels: {
        enabled: true,
        formatter: function(value) {
          return value + '%';
        },
     
        style: {
          colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
          fontSize: '14px',
          fontFamily: 'Roboto',
          fontWeight: 500,
          color:'#FFFFFF',
          
          
        },
        dropShadow: {
          enabled: false,
        },
        background: {
          enabled: false,
          foreColor: '#FFFFFF',
          padding: 4,
          borderRadius: 4,
        },
      },
      colors: ['#00CE7D', '#FF4A7A', '#325C06', '#F7931A'],
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '90%',
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: false,
                label: '1469',
                color: '#FFFFFF',
                formatter: function(w) {
                  return (
                    w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0).toFixed(1) + '%'
                  );
                },
              },
              name: {
                show: true,
                fontSize: '18px',
                lineHeight: '18.23px',
                fontWeight: 500,
                color: '#FFFFFF',
                offsetY: 10,
              },
              value: {
                show: false,
                fontSize: '28px',
                fontFamily: 'Roboto',
                fontWeight: 700,
                color: 'white',
                offsetY: 10,
              },
              formatter: function(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex];
                const percent = val.toFixed(1);
                return (
                  '<div class="donut-label">' +
                  '<span class="name">' +
                  name +
                  '</span>' +
                  '<span class="percent" style="color:#ffffff">' +
                  percent +
                  '%</span>' +
                  '</div>'
                );
              },
              offsetY: 10,
              offsetX: -15,
              minAngleToShowLabel: 1,
            },
          },
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function(value) {
            return value + '%';
          },
        },
      },
      legend: {
        show: false,
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Apply tooltip style
    const tooltipEl = chartRef.current.querySelector('.apexcharts-tooltip span');
    tooltipEl.style.color = '#ffffff';

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="donut-chart" ref={chartRef} />;
};

export default InventoryChart;

// import React from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

// const InventoryChart = () => {
//   const data = [
//     { name: 'Critical', value: 2.4 },
//     { name: 'High', value: 15.9 },
//     { name: 'Medium', value: 15.9 },
//     { name: 'Low', value: 65.8 },
//   ];

//   const COLORS = ['#00CE7D', '#FF4A7A', '#325C06', '#F7931A'];

//   const renderLabel = ({ percent, name }) => `${name} ${(percent * 100).toFixed(1)}%`;

//   return (
//     <ResponsiveContainer width="100%" height={170}>
//       <PieChart>
//         <Pie
//           data={data}
//           dataKey="value"
//           nameKey="name"
//           cx="50%"
//           cy="50%"
//           innerRadius="70%"
//           outerRadius="78%"
//           fill="#8884d8"
//           labelLine={false}
//           label={renderLabel}
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default InventoryChart;

