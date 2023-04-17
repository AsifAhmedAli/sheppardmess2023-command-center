
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function CardOne() {
  const percentage = 2;

  return (
    <div className="h-[191px] w-[500px] pb-8 px-6 pt-6 rounded-xl bg-[#13141B]">
      <div className="flex justify-between px-3 pt-1">
        <div className="flex">
          <div className="flex flex-col bg-[#FF8C2C] w-[38px] h-[38px] rounded-[3px] justify-center text-center uppercase">
            <p className="text-[20px] font-bold text-navy-700 dark:text-white">
              {" "}
              d
            </p>
          </div>
          <div className="ml-4">
            {[
              { title: "Total Risk", value: 75, color: "#ED6B4D" },
              { title: "Total Source", value: 75, color: "#F1A94A" },
              { title: "Total Protect", value: 75, color: "#0C9095" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col mb-2 leading-6"
              >
                <h3 className="text-[16px] text-[#FFFFFF] font-semibold mb-2">
                  {item.title}
                </h3>
                <ProgressBar
                  completed={item.value}
                  bgColor={item.color}
                  baseBgColor="#434655"
                  height="6px"
                  width="215px"
                  gap="80px"
                  isLabelVisible={false}
                />
              </div>
            ))}
          </div>
          <div className="ml-10 flex mt-2">
            <div className="h-32 mt-1 w-px bg-[#FFFFFF14] mr-4"></div>
            <div className="flex flex-col items-center justify-center ml-5">
              <div className="relative w-[83px] h-[83px]">
                <CircularProgressbar
                  value={percentage}
                  strokeWidth={7}
                  styles={buildStyles({
                    strokeLinecap: "square",
                    textSize: "14px",
                    pathColor: "white",
                    textColor: "white",
                    trailColor: "#0198F3",
                    lineHeight: "18px",
                    backgroundColor: "transparent",
                  })}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white text-sm leading-[18px] font-medium">Scoring</span>
                  <span className="text-white text-sm font-medium">{percentage}%</span>
                </div>
              </div>
              <p className="text-white text-base font-medium mt-2">No change</p>
              <p className="text-[#A9A9A9] text-sm font-medium">This week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      {/* <div className="flex h-full w-full flex-row sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
<div className="h-full w-full">
<LineChart
         chartData={lineChartDataOverallRevenue}
         chartOptions={lineChartOptionsOverallRevenue}
       />
</div>
</div> */}
</div>
);
}

export default CardOne;

