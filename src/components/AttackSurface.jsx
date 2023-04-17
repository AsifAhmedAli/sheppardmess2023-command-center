
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const AttackSurface = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'radar',
        width:672,
        height:385,
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          },
        toolbar: {
            show: false
          }
        
      },
      
      stroke: {
        width: 1
      },
      fill: {
        opacity: 0.3
      },
      
      markers: {
        size: 0
      },
      
      series: [
        {
          name: 'PW',
          data: [80, 50, 30, 40, 100, 90],
          color: '#F6C263',
          text: '',
          dataLabels: null,
        },
        {
          name: 'XSS',
          data: [20, 30, 40, 80, 100, 75],
          color: '#F7A6A6',
          text: '',
          
          
        },
        {
          name: 'Log4j',
          data: [50, 10, 60, 20, 90, 100],
          color: '#FFA440',
          text: '',
        },
        {
          name: 'Injection',
          data: [70, 40, 100, 10, 25, 65],
          color: '#27AA81',
          text: '',
        },
        {
          name: 'Serializing',
          data: [10, 50, 70, 60, 100, 50],
          color: '#F6C263',
          text: '',
        },
        
      ],
    //   colors: ['#F6C263', '#F26457', '#FFA440', '#27AA81', '#6F42C1'],
    xaxis: {
        categories: ['App1', 'App2', 'App3', 'App4', 'App5', 'App6'],
        labels: {
          style: {
            fontFamily: 'DM Sans',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '21px',
            letterSpacing: '0em',
            textAlign: 'left',
            color:'#E3E3E3'
          }
        }
      },
      
      
      yaxis: {
        opposite: true,
        show: false,
        min: 0,
        max: 100, // set the max value to ensure all circles are displayed
        tickAmount: 6,
        labels: {
          show: false,
          formatter: function (value) {
            return value + '%';
          },
        },

      },
      legend: {
        position: 'left',
        markers: {
          width: 16,
          height: 16,
        },
        itemMargin: {
          vertical: 10,
        },
        // offsetY: -10,
        
        formatter: function (seriesName, opts) {
          return [
            '<span style="color:#E3E3E3; font-size: 20px; line-height: 26.04px; font-weight:500;">' + seriesName + '</span>',
            '<div style="font-family: DM Sans; font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: 0em; text-align: left; color:#A9A9A9;">2014</div>'
          ].join('');
        },
      },
      
    };

    const chart = new ApexCharts(chartRef.current, options);

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-[629px] h-[437px] rounded-xl bg-[#13141B] p-5">
        <h1 className="text-[24px] leading-[31.25px] font-medium text-[#E3E3E3]">Attack Surface</h1>
        <div ref={chartRef} className=''></div>
      </div>
    </>
  );
};

export default AttackSurface;


