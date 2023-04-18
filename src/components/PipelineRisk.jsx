// import React from "react";
// import {AiFillEyeInvisible} from 'react-icons/ai'
// import {AiFillEye} from 'react-icons/ai'

// function PipelineRisk() {
//   return (
//     <>
//         <div className="w-[1538px] h-[613px] bg-[#13141B] rounded-xl my-5">
//         <div className="flex items-center justify-between p-5">
//             <h1 className="text-[24px] leading-[31.25px] text-[#E3E3E3] font-medium">
//             Pipeline Risk
//             </h1>
//             <div className="text-white flex">
//                 <AiFillEyeInvisible className="w-[24px] h-[24px]" />
//                 <button className="text-[20px] leading-[18px] font-medium ml-1">Show Details</button>
//                 </div>
//         </div>
//         {/* chart */}
//             <div id='riskchart'>
//                 <h1>chart</h1>
//             </div>
//             {/* data */}
//             <div className="w-[1412px] h-[240px] bg-[#181A25] rounded-xl flex flex-col " id='riskchartdata'>
//                data
                
//             </div>
//         </div>
//     </>
//   );
// }

// export default PipelineRisk;

import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function PipelineRisk() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div
        className={`my-5 bg-[#13141B] rounded-xl ${
          showDetails ? "w-[1538px] h-[613px]" : "w-[1538px] h-[335px]"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <h1 className="text-[24px] leading-[31.25px] text-[#E3E3E3] font-medium">
            Pipeline Risk
          </h1>
          <div className="text-white flex">
            {showDetails ? (
              <AiFillEye className="w-[24px] h-[24px]" onClick={toggleDetails} />
            ) : (
              <AiFillEyeInvisible className="w-[24px] h-[24px]" onClick={toggleDetails} />
            )}
            <button className="text-[20px] leading-[18px] font-medium ml-1" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
          </div>
        </div>
        {/* chart */}
       <div className="flex flex-col items-center">
       <div>
         <h1>chart will be added here and then remove this heading</h1>
        </div>
        {/* data */}
        {showDetails && (
          <div className="w-[1412px] h-[240px] bg-[#181A25] rounded-xl flex flex-col px-10 py-5">
            <div>
               {/* 1st row */}
               <div className="flex items-center">
                    <div className=" mr-5">
                    <h1 className="text-[#AEB6CE] text-[18px] leading-[16px] font-medium">Critical</h1>
                    </div>
                    
                    <div className="flex ">
                    <div className="flex gap-2 mr-32">
                    <div className="bg-[#FF0000] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF0000] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF0000] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF0000] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF0000] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF0000] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF0000] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    </div>
                </div>
                {/* hr line */}
                <div className="w-[1215px] h-[1px] bg-[#FFFFFF] bg-opacity-10 my-4"></div>
                {/* 2nd row */}
                <div className="flex items-center">
                    <div className=" mr-11">
                    <h1 className="text-[#AEB6CE] text-[18px] leading-[16px] font-medium">High</h1>
                    </div>
                    
                    <div className="flex ">
                    <div className="flex gap-2 mr-32">
                    <div className="bg-[#FF531D] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF531D] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF531D] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF531D] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF531D] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF531D] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#FF531D] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    </div>
                </div>
                {/* hr line */}
                <div className="w-[1215px] h-[1px] bg-[#FFFFFF] bg-opacity-10 my-4"></div>
                {/* 3rd row */}
                <div className="flex items-center">
                    <div className=" mr-4">
                    <h1 className="text-[#AEB6CE] text-[18px] leading-[16px] font-medium">Medium</h1>
                    </div>
                    
                    <div className="flex ">
                    <div className="flex gap-2 mr-32">
                    <div className="bg-[#E3C216] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#E3C216] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#E3C216] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#E3C216] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#E3C216] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#E3C216] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#E3C216] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    </div>
                </div>
                {/* hr line */}
                <div className="w-[1215px] h-[1px] bg-[#FFFFFF] bg-opacity-10 my-4"></div>
                <div className="flex items-center">
                    <div className=" mr-12">
                    <h1 className="text-[#AEB6CE] text-[18px] leading-[16px] font-medium">Low</h1>
                    </div>
                    
                    <div className="flex ">
                    <div className="flex gap-2 mr-32">
                    <div className="bg-[#0047FF] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#0047FF] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#0047FF] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#0047FF] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#0047FF] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#0047FF] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    <div className="flex gap-2 mr-32 ">
                    <div className="bg-[#0047FF] w-[24px] h-[24px] rounded"></div>
                    <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">30</p>
                    </div>
                    </div>
                </div>
            
            </div>
          </div>
      
        )}
        </div>
      </div>
    </>
  );
}

export default PipelineRisk;

